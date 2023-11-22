"use client"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

import { RyePay } from "@rye-api/rye-pay"
import {
  createRyeCart,
  getRyeCart,
  updateRyeCartBuyerIdentity,
} from "@lib/data"
import { useCart } from "medusa-react"
import { Cart, Country, Cart as RyeCart } from "types/ryeGraphql"
import { useCheckout } from "./checkout-context"

type RyePayProps = {
  children: React.ReactNode
}

const ryePay = new RyePay()

type RyePayContext = {
  month: string
  year: string
  ryePay: RyePay
  ryeCart?: Cart
  isSubmitting: boolean
  isPaymentCompleted: boolean
  initRyePayElements?: () => void
  createCart?: () => Promise<RyeCart | undefined>
  submit?: () => Promise<void>
  setMonth?: React.Dispatch<React.SetStateAction<string>>
  setYear?: React.Dispatch<React.SetStateAction<string>>
}

const RyePayContext = createContext<RyePayContext>({
  month: "",
  year: "",
  isPaymentCompleted: false,
  isSubmitting: false,
  ryePay,
})

/**
 * Used to access the RyePayContext
 * @returns context of the RyePayContext
 */
export const useRyePay = () => {
  const context = useContext(RyePayContext)

  return context
}

/**
 *
 * Provider for the RyePayContext
 *
 */
export const RyePayProvider = ({ children }: RyePayProps) => {
  const { cart, updateCart, setCart } = useCart()
  const { getValues } = useCheckout()
  const [month, setMonth] = useState("")
  const [ryeCart, setRyeCart] = useState<RyeCart | undefined>()
  const [year, setYear] = useState("")
  const [isPaymentCompleted, setPaymentCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Fetches the cart from Rye's api
   */
  const fetchRyeCart = useCallback(async () => {
    const ryeCartId = localStorage.getItem("ryeCartId")
    if (ryeCartId) {
      const ryeCart = await getRyeCart(ryeCartId as string)

      setRyeCart(ryeCart)
    }
  }, [])

  /**
   * Initializes RyePay elements
   */
  const initRyePayElements = useCallback(() => {
    ryePay.init({
      apiKey: window
        .atob(process.env.NEXT_PUBLIC_RYE_AUTH_TOKEN ?? "")
        .replaceAll(":", ""),
      numberEl: "spreedly-number",
      cvvEl: "spreedly-cvv",
      environment: "prod",
      onReady: () => {
        ryePay.setStyle(
          "number",
          "font-size: 14px;display:block;width:100%;border-radius:1px;border:1px solid #ccc;background-color:#fff;padding:14px;box-sizing:border-box;"
        )
        ryePay.setStyle(
          "cvv",
          "font-size: 14px;display:block;width:100%;border-radius:1px;border:1px solid #ccc;background-color:#fff;padding:14px;box-sizing:border-box;"
        )
        ryePay.setPlaceholder("number", "Card number")
        ryePay.setPlaceholder("cvv", "CVV")
      },
      onCartSubmitted: (submitCartResults, errors) => {
        if (
          (errors && errors.length > 0) ||
          (submitCartResults?.errors && submitCartResults.errors.length > 0)
        ) {
          console.log(errors)
        } else {
          setPaymentCompleted(true)
        }
        setIsSubmitting(false)
      },
      onErrors: (errors: any[]) => {
        for (const { key, message, attribute } of errors) {
          console.log(`new error: ${key}-${message}-${attribute}`)
        }
        setIsSubmitting(false)
      },
      enableLogging: true,
      onIFrameError: (err: unknown) => {
        console.log(`frameError: ${JSON.stringify(err)}`)
      },
    })
  }, [])

  useEffect(() => {
    fetchRyeCart()
  }, [fetchRyeCart])

  /**
   * Creates a cart using Rye's api
   */
  const createCart = useCallback(async () => {
    if (!cart) {
      return
    }

    const ryeCartItems: {
      productId: string
      quantity: number
      marketplace: string
    }[] = cart.items.map((item) => {
      return {
        productId: item.variant.metadata?.marketplaceId as string,
        quantity: item.quantity,
        marketplace: item.variant.metadata?.marketplace as string,
      }
    })

    const { shipping_address, email, billing_address } = getValues()

    const buyerIdentity = {
      firstName:
        cart.shipping_address?.first_name ?? shipping_address?.first_name,
      lastName: cart.shipping_address?.last_name ?? shipping_address?.last_name,
      email: cart.email ?? email,
      phone: cart.shipping_address?.phone ?? shipping_address?.phone,
      address1: cart.shipping_address?.address_1 ?? shipping_address?.address_1,
      address2: cart.shipping_address?.address_2 ?? shipping_address?.address_2,
      city: cart.shipping_address?.city ?? shipping_address?.city,
      provinceCode:
        cart.shipping_address?.province ?? shipping_address?.province,
      countryCode:
        (cart.shipping_address?.country_code?.toUpperCase() as Country) ??
        (shipping_address?.country_code?.toUpperCase() as Country),
      postalCode:
        cart.shipping_address?.postal_code ?? shipping_address?.postal_code,
    }
    let updatedRyeCart

    if (ryeCart) {
      updatedRyeCart = await updateRyeCartBuyerIdentity({
        buyerIdentity,
        cartId: ryeCart.id,
      })
    } else {
      updatedRyeCart = await createRyeCart({
        items: ryeCartItems,
        buyerIdentity,
      })
    }

    setRyeCart(updatedRyeCart)

    localStorage.setItem("ryeCartId", updatedRyeCart.id)

    return updatedRyeCart
  }, [cart, getValues, ryeCart])

  /**
   * Places the order using Rye's api
   */
  const submit = useCallback(async () => {
    if (!cart) {
      return
    }
    setIsSubmitting(true)
    const response = await fetch("https://api.ipify.org?format=json").then(
      (res) => res.json()
    )

    if (!ryeCart) {
      return
    }

    ryePay.submit({
      first_name: cart.shipping_address?.first_name ?? "",
      last_name: cart.shipping_address?.last_name ?? "",
      month,
      year,
      phone_number: cart.billing_address?.phone ?? "",
      cartId: ryeCart.id, // IMPORTANT! Make sure the cartId is valid
      address1: cart.shipping_address?.address_1 ?? "",
      address2: cart.shipping_address?.address_2 ?? "",
      zip: cart.shipping_address?.postal_code ?? "",
      city: cart.shipping_address?.city ?? "",
      country: cart.shipping_address?.country_code?.toUpperCase() ?? "",
      state: cart.shipping_address?.province ?? "",
      selectedShippingOptions: ryeCart.stores.map((store) => {
        return {
          shippingId: store.offer?.shippingMethods[0].id ?? "",
          store: store.store,
        }
      }),
      shopperIp: response.ip,
    })

    localStorage.removeItem("ryeCartId")
  }, [cart, month, ryeCart, year])

  return (
    <RyePayContext.Provider
      value={{
        month,
        year,
        ryePay,
        setMonth,
        setYear,
        isSubmitting,
        isPaymentCompleted,
        submit,
        initRyePayElements,
        createCart,
        ryeCart,
      }}
    >
      {children}
    </RyePayContext.Provider>
  )
}
