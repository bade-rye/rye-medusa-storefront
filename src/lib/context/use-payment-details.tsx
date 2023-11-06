"use client"
import { createContext, useContext, useState } from "react"

type PaymentDetailProps = {
  children: React.ReactNode
}

type PaymentDetailsContext = {
  month: string
  year: string
  setMonth?: React.Dispatch<React.SetStateAction<string>>
  setYear?: React.Dispatch<React.SetStateAction<string>>
}

const PaymentContext = createContext<PaymentDetailsContext>({
  month: "",
  year: "",
})

const usePaymentDetails = () => {
  const context = useContext(PaymentContext)

  return context
}

export const PaymentDetailProvider = ({ children }: PaymentDetailProps) => {
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  return (
    <PaymentContext.Provider
      value={{
        month,
        year,
        setMonth,
        setYear,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export default usePaymentDetails
