import { stripe } from '@/services/stripe'

export const createCheckoutSession = async () => {
  try {
    console.log('Iniciando a criação da sessão de checkout...')
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Smartphone Motorola Moto G84',
            },
            unit_amount: 400,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://gateways-payment.vercel.app',
      cancel_url: 'https://gateways-payment.vercel.app',
    })

    return { url: session.url }
  } catch (error) {
    return { message: 'Erro ao criar sessão de checkout' }
  }
}
