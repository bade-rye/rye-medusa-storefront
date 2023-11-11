import { medusaAdminRequest } from "@lib/medusa-fetch"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const existingShippingOptions = await medusaAdminRequest(
    "GET",
    "/shipping-options",
    {
      query: {
        region_id: body.region_id,
      },
    }
  )

  const samePrice = existingShippingOptions.body.shipping_options.find(
    (option: { amount: number }) => {
      return option.amount === body.amount
    }
  )

  if (samePrice) {
    return NextResponse.json({
      status: 200,
      ok: true,
      body: { shipping_option: samePrice },
    })
  }

  const res = await medusaAdminRequest("POST", "/shipping-options", {
    body,
  })

  return NextResponse.json(res)
}
