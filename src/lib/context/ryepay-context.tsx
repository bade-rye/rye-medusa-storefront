"use client"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { RyePay } from "@rye-api/rye-pay"
import { createRyeCart } from "@lib/data"
import { useCart } from "medusa-react"

type RyePayProps = {
  children: React.ReactNode
}

const ryePay = new RyePay()

type RyePayContext = {
  month: string
  year: string
  ryePay: RyePay
  isSubmitting: boolean
  isPaymentCompleted: boolean
  initRyePayElements?: () => void
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
  const { cart } = useCart()
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [isPaymentCompleted, setPaymentCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Initializes RyePay elements
   */
  const initRyePayElements = useCallback(() => {
    ryePay.init({
      apiKey: window
        .atob(process.env.NEXT_PUBLIC_RYE_PAY_TOKEN ?? "")
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

  /**
   * Creates a cart using Rye's api
   */
  const createCart = useCallback(async () => {
    if (!cart) {
      return
    }

    const ryeCartItems = cart.items.map((item) => {
      return {
        productId: item.variant.metadata?.marketplaceId,
        quantity: item.quantity,
        marketplace: item.variant.metadata?.marketplace,
      }
    })
    const buyerIdentity = {
      firstName: cart.shipping_address?.first_name,
      lastName: cart.shipping_address?.last_name,
      email: cart.email,
      phone: cart.billing_address?.phone,
      address1: cart.shipping_address?.address_1,
      address2: cart.shipping_address?.address_2,
      city: cart.shipping_address?.city,
      provinceCode: cart.shipping_address?.province,
      countryCode: cart.shipping_address?.country_code?.toUpperCase(),
      postalCode: cart.shipping_address?.postal_code,
    }

    const ryeCart = await createRyeCart({ items: ryeCartItems, buyerIdentity })
    return ryeCart
  }, [cart])

  /**
   * Places the order using Rye's api
   */
  const submit = useCallback(async () => {
    if (!cart) {
      return
    }
    setIsSubmitting(true)
    const [ryeCart, response] = await Promise.all([
      createCart(),
      fetch("https://api.ipify.org?format=json").then((res) => res.json()),
    ])

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
      selectedShippingOptions: [
        { store: "amazon", shippingId: "6.99-Default shipping method" },
      ], // default shipping method rye uses,
      shopperIp: response.ip,
    })
  }, [cart, createCart, month, year])

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
      }}
    >
      {children}
    </RyePayContext.Provider>
  )
}
