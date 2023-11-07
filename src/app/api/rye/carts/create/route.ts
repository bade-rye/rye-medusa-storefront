import { CREATE_RYE_CART } from "../queries"
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

type RyeItem = {
  buyerIdentity: BuyerIdentity
  productId: string
  variantId: string
  quantity: string
  marketplace: "AMAZON" | "SHOPIFY"
}

type AmazonRyeItemInput = { productId: string; quantity: string }
type ShopifyRyeItemInput = { variantId: string; quantity: string }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const items = body.items as RyeItem[]
    const buyerIdentity = body.buyerIdentity as BuyerIdentity

    const cartItems = {
      amazonCartItemsInput: items.reduce((acc: AmazonRyeItemInput[], curr) => {
        if (curr.marketplace === "AMAZON") {
          return [
            ...acc,
            {
              productId: curr.productId,
              quantity: curr.quantity,
            },
          ]
        }
        return acc
      }, []),
      shopifyCartItemsInput: items.reduce(
        (acc: ShopifyRyeItemInput[], curr) => {
          if (curr.marketplace === "SHOPIFY") {
            return [
              ...acc,
              {
                variantId: curr.productId,
                quantity: curr.quantity,
              },
            ]
          }
          return acc
        },
        []
      ),
    }

    const result = await ryeClient
      .mutation(CREATE_RYE_CART, {
        input: {
          items: cartItems,
          buyerIdentity,
        },
      })
      .toPromise()

    return NextResponse.json(result.data.createCart.cart)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message })
  }
}
