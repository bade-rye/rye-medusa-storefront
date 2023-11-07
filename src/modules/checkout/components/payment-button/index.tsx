import { useCheckout } from "@lib/context/checkout-context"
import { createRyeCart } from "@lib/data"
import usePaymentDetails from "@lib/context/use-payment-details"
import { ryePay } from "@lib/util/ryePay"
import { PaymentSession } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import Spinner from "@modules/common/icons/spinner"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useCart } from "medusa-react"
import React, { useCallback, useEffect, useState } from "react"

type PaymentButtonProps = {
  paymentSession?: PaymentSession | null
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ paymentSession }) => {
  const [notReady, setNotReady] = useState(true)
  const { cart } = useCart()

  useEffect(() => {
    setNotReady(true)

    if (!cart) {
      return
    }

    if (!cart.shipping_address) {
      return
    }

    if (!cart.billing_address) {
      return
    }

    if (!cart.email) {
      return
    }

    if (cart.shipping_methods.length < 1) {
      return
    }

    setNotReady(false)
  }, [cart])

  switch (paymentSession?.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton session={paymentSession} notReady={notReady} />
      )
    case "manual":
      return <ManualTestPaymentButton notReady={notReady} />
    case "paypal":
      return (
        <PayPalPaymentButton notReady={notReady} session={paymentSession} />
      )
    default:
      return <Button disabled>Select a payment method</Button>
  }
}

const StripePaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("cardNumber")

  useEffect(() => {
    if (!stripe || !elements) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [stripe, elements])

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address.first_name +
              " " +
              cart.billing_address.last_name,
            address: {
              city: cart.billing_address.city ?? undefined,
              country: cart.billing_address.country_code ?? undefined,
              line1: cart.billing_address.address_1 ?? undefined,
              line2: cart.billing_address.address_2 ?? undefined,
              postal_code: cart.billing_address.postal_code ?? undefined,
              state: cart.billing_address.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <Button
        disabled={submitting || disabled || notReady}
        onClick={handlePayment}
      >
        {submitting ? <Spinner /> : "Checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ""

const PayPalPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`)
          return
        }
        onPaymentCompleted()
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: cart?.region.currency_code.toUpperCase(),
        intent: "authorize",
      }}
    >
      {errorMessage && (
        <span className="text-rose-500 mt-4">{errorMessage}</span>
      )}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={async () => session.data.id as string}
        onApprove={handlePayment}
        disabled={notReady || submitting}
      />
    </PayPalScriptProvider>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const { cart } = useCart()
  const { month, year } = usePaymentDetails()

  const [submitting, setSubmitting] = useState(false)

  const { onPaymentCompleted } = useCheckout()

  const loadSpreedly = useCallback(() => {
    ryePay.init({
      apiKey: window
        .atob(process.env.NEXT_RYE_PAY_TOKEN ?? "")
        .replaceAll(":", ""),
      numberEl: "spreedly-number",
      cvvEl: "spreedly-cvv",
      environment: "prod",
      onReady: () => {
        // Customize card number field and cvv field
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
          onPaymentCompleted()
        }
        setSubmitting(false)
      },
      onErrors: (errors: any[]) => {
        for (const { key, message, attribute } of errors) {
          console.log(`new error: ${key}-${message}-${attribute}`)
        }
        setSubmitting(false)
      },
      enableLogging: true,
      onIFrameError: (err: unknown) => {
        console.log(`frameError: ${JSON.stringify(err)}`)
        setSubmitting(false)
      },
    })
  }, [onPaymentCompleted])

  useEffect(() => {
    loadSpreedly()
  }, [])

  const handlePayment = async () => {
    if (!cart) {
      return
    }

    setSubmitting(true)
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
    const response = await fetch("https://api.ipify.org?format=json").then(
      (res) => res.json()
    )

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

    console.log(ryeCart)

    // setSubmitting(true)

    // onPaymentCompleted()

    // setSubmitting(false)
  }

  return (
    <Button disabled={submitting || notReady} onClick={handlePayment}>
      {submitting ? <Spinner /> : "Checkout"}
    </Button>
  )
}

export default PaymentButton
