import { UPDATE_BUYER_IDENTITY } from "../queries"
import { ryeClient } from "../../clients"
import { NextRequest, NextResponse } from "next/server"

type BuyerIdentity = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address1: string
  address2?: string
  city: string
  provinceCode: string
  countryCode: string
  postalCode: string
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const cartId = body.cartId
    const buyerIdentity = body.buyerIdentity as BuyerIdentity
    const result = await ryeClient
      .mutation(UPDATE_BUYER_IDENTITY, {
        input: {
          id: cartId,
          buyerIdentity,
        },
      })
      .toPromise()

    console.log(result.data)

    return NextResponse.json(result.data.updateCartBuyerIdentity.cart)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message })
  }
}
