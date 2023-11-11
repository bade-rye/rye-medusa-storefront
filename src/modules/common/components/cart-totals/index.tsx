import { Cart } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import React, { useMemo } from "react"
import { Cart as RyeCart } from "types/ryeGraphql"

type CartTotalsProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  ryeCart?: RyeCart
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart, ryeCart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart
  console.log(tax_total)
  const totalTax = useMemo(() => {
    return (
      (ryeCart?.stores?.reduce((acc, store) => {
        return (acc += store.offer?.shippingMethods[0].taxes?.value ?? 0)
      }, 0) ?? 0) + (tax_total ?? 0)
    )
  }, [ryeCart, tax_total])

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  return (
    <div>
      <div className="text-small-regular text-gray-700">
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Subtotal</span>
          <span>{getAmount(subtotal)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {!!discount_total && (
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>- {getAmount(discount_total)}</span>
            </div>
          )}
          {!!gift_card_total && (
            <div className="flex items-center justify-between">
              <span>Gift card</span>
              <span>- {getAmount(gift_card_total)}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>{getAmount(shipping_total)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Taxes</span>
            <span>{getAmount(totalTax)}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total</span>
          <span>{getAmount((total ?? 0) + totalTax)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
