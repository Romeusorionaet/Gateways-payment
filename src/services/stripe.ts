import Stripe from 'stripe'

const initializeStripe = () => {
  const stripe = new Stripe(
    'sk_test_51QgpScEAgaC0HzyGNl7eCg73f7x0NYPGVcQLeZU1TWEWA9qjtwJhxD3zEkQbW4rrtcP4goesXjVDKJbBUXfRQSIg00DgsMhwsG',
    {
      apiVersion: '2024-12-18.acacia',
      appInfo: {
        name: 'gateway-stripe',
      },
    },
  )

  return stripe
}

export const stripe = initializeStripe()
