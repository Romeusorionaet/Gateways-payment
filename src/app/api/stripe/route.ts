import { createCheckoutSession } from '@/actions/stripe/create-checkout-session'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { url, message } = await createCheckoutSession()

    if (url) {
      return NextResponse.json(url)
    } else {
      return NextResponse.json(message)
    }
  } else {
    return NextResponse.json('Método não permitido', { status: 405 })
  }
}
