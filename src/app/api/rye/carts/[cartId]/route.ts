import { NextRequest, NextResponse } from "next/server"
import { GET_CART_BY_ID } from "../queries"
import { ryeClient } from "../../clients"

export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, any> }
) {
  try {
    const id = params.cartId

    const result = await ryeClient
      .query(GET_CART_BY_ID, {
        id,
      })
      .toPromise()

    return NextResponse.json(result.data.checkoutByCartID.cart)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message })
  }
}
