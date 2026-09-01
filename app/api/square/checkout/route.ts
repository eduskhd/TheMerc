// =============================================================================
// SQUARE CHECKOUT API — Server-Side Route
// =============================================================================
// This route is prepared for future Square Checkout API integration.
// Creates checkout sessions server-side — the access token is never exposed.
//
// FUTURE INTEGRATION:
// 1. Install Square SDK: npm install squareup
// 2. Configure environment variables
// 3. Implement the checkout creation logic below
// =============================================================================

import { NextRequest, NextResponse } from 'next/server'

interface CheckoutItem {
  catalogObjectId: string
  quantity: number
  note?: string
}

interface CheckoutBody {
  items: CheckoutItem[]
  pickupTime?: string
}

export async function POST(request: NextRequest) {
  const accessToken = process.env.SQUARE_ACCESS_TOKEN
  const locationId = process.env.SQUARE_LOCATION_ID

  if (!accessToken || !locationId) {
    return NextResponse.json(
      {
        error: 'Square integration not configured',
        configured: false,
      },
      { status: 503 }
    )
  }

  try {
    const body: CheckoutBody = await request.json()

    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 })
    }

    // TODO: Implement Square checkout creation
    // Example:
    //
    // const { Client, Environment } = await import('squareup')
    // const client = new Client({ accessToken, environment: ... })
    //
    // const idempotencyKey = crypto.randomUUID()
    //
    // const lineItems = body.items.map((item) => ({
    //   quantity: item.quantity.toString(),
    //   catalogObjectId: item.catalogObjectId,
    //   note: item.note,
    // }))
    //
    // const { result } = await client.checkoutApi.createPaymentLink({
    //   idempotencyKey,
    //   order: {
    //     order: {
    //       locationId,
    //       lineItems,
    //       fulfillments: [{
    //         type: 'PICKUP',
    //         pickupDetails: {
    //           recipient: { displayName: 'Customer' },
    //           pickupAt: body.pickupTime ?? new Date(Date.now() + 30 * 60000).toISOString(),
    //         },
    //       }],
    //     },
    //   },
    // })
    //
    // return NextResponse.json({ checkoutUrl: result.paymentLink?.url })

    return NextResponse.json(
      {
        message: 'Square Checkout API route ready — implementation pending.',
        configured: true,
      },
      { status: 501 }
    )
  } catch (error) {
    console.error('[Square Checkout]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
