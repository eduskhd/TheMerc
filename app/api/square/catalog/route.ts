// =============================================================================
// SQUARE CATALOG API — Server-Side Route
// =============================================================================
// This route is prepared for future Square Catalog API integration.
// It runs server-side ONLY — the SQUARE_ACCESS_TOKEN is never exposed to client.
//
// FUTURE INTEGRATION:
// 1. Install Square SDK: npm install squareup
// 2. Set environment variables in .env.local:
//    SQUARE_ACCESS_TOKEN=your_token
//    SQUARE_LOCATION_ID=your_location_id
//    SQUARE_ENVIRONMENT=production
// 3. Uncomment the Square SDK code below
// =============================================================================

import { NextResponse } from 'next/server'

export async function GET() {
  const accessToken = process.env.SQUARE_ACCESS_TOKEN
  const locationId = process.env.SQUARE_LOCATION_ID

  // Guard: Square not configured yet
  if (!accessToken || !locationId) {
    return NextResponse.json(
      {
        error: 'Square integration not configured',
        message:
          'Set SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID in your environment variables.',
        configured: false,
      },
      { status: 503 }
    )
  }

  // TODO: Implement Square Catalog API call when ready
  // Example implementation:
  //
  // const { Client, Environment } = await import('squareup')
  // const client = new Client({
  //   accessToken,
  //   environment:
  //     process.env.SQUARE_ENVIRONMENT === 'production'
  //       ? Environment.Production
  //       : Environment.Sandbox,
  // })
  //
  // const { result } = await client.catalogApi.listCatalog(
  //   undefined,
  //   'ITEM,ITEM_VARIATION,CATEGORY,IMAGE'
  // )
  //
  // return NextResponse.json({
  //   configured: true,
  //   catalog: result.objects ?? [],
  // })

  return NextResponse.json({
    configured: true,
    catalog: [],
    message: 'Square Catalog API integration ready — uncomment implementation.',
  })
}
