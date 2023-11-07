import usePaymentDetails from "@lib/context/use-payment-details"
import { PaymentSession } from "@medusajs/medusa"
import Radio from "@modules/common/components/radio"
import clsx from "clsx"
import React from "react"

type PaymentContainerProps = {
  paymentSession: PaymentSession
  selected: boolean
  setSelected: () => void
  disabled?: boolean
}

const PaymentInfoMap: Record<string, { title: string; description: string }> = {
  stripe: {
    title: "Credit card",
    description: "Secure payment with credit card",
  },
  "stripe-ideal": {
    title: "iDEAL",
    description: "Secure payment with iDEAL",
  },
  paypal: {
    title: "PayPal",
    description: "Secure payment with PayPal",
  },
  manual: {
    title: "Credit Card payment",
    description: "Enter your credit card details below",
  },
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selected,
  setSelected,
  disabled = false,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0",
        {
          "bg-gray-50": selected,
        }
      )}
    >
      <button
        className={"grid grid-cols-[12px_1fr] gap-x-4 py-4 px-8"}
        onClick={setSelected}
        disabled={disabled}
      >
        <Radio checked={selected} />
        <div className="flex flex-col text-left">
          <h3 className="text-base-semi leading-none text-gray-900">
            {PaymentInfoMap[paymentSession.provider_id].title}
          </h3>
          <span className="text-gray-700 text-small-regular mt-2">
            {PaymentInfoMap[paymentSession.provider_id].description}
          </span>
          {selected && (
            <div className="w-full mt-4">
              <PaymentElement />
            </div>
          )}
        </div>
      </button>
    </div>
  )
}

const PaymentElement = () => {
  const { month, year, setMonth, setYear } = usePaymentDetails()
  return (
    <div
      className="pt-8 pr-7"
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <div id="spreedly-number" style={{ height: "46px" }} />
      <div style={{ display: "flex", gap: "16px" }}>
        <input
          value={month}
          onChange={(e) => {
            setMonth?.(e.target.value)
          }}
          placeholder="MM"
          inputMode="numeric"
          maxLength={2}
          minLength={2}
          style={{
            display: "block",
            width: "50%",
            borderRadius: "1px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            padding: "10px",
            fontSize: "14px",
            textAlign: "start",
            lineHeight: "24px",
            boxSizing: "border-box",
            color: "#000",
            outline: "none",
          }}
        />

        <input
          placeholder="YYYY"
          value={year}
          onChange={(e) => {
            setYear?.(e.target.value)
          }}
          inputMode="numeric"
          maxLength={4}
          minLength={4}
          style={{
            display: "block",
            width: "50%",
            borderRadius: "1px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            padding: "10px",
            fontSize: "14px",
            textAlign: "start",
            lineHeight: "24px",
            boxSizing: "border-box",
            color: "#000",
            outline: "none",
          }}
        />
      </div>
      <div id="spreedly-cvv" style={{ height: "46px" }} />
    </div>
  )
}

export default PaymentContainer
