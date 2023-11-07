import { useRyePay } from "@lib/context/ryepay-context"
import { useEffect } from "react"

const PaymentRye = () => {
  const { month, year, setMonth, setYear, initRyePayElements } = useRyePay()

  useEffect(() => {
    initRyePayElements?.()
  }, [initRyePayElements])

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

export default PaymentRye
