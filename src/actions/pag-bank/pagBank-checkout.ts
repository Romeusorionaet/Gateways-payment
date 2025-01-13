'use server'

export const pagBankCheckout = async () => {
  try {
    const response = await fetch(
      'https://sandbox.api.pagseguro.com/checkouts',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer d938ca4b-d765-4bb8-8c8c-048b3c65a46d369b2cf44d91b8c71ce6aaf57486041406af-9e3c-490d-8f73-5cf8ca8ef7a6',
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({
          reference_id: 'pedido-0001',
          customer: {
            name: 'Jose da Silva',
            email: 'email@teste.com',
          },
          items: [
            {
              reference_id: 'item-01',
              name: 'Produto de teste',
              quantity: 1,
              unit_amount: 400,
            },
          ],
          // notification_urls: ['https://'],
          charges: [
            {
              reference_id: 'cobranca-01',
              description: 'Pagamento de teste',
              amount: {
                value: 4000,
                currency: 'BRL',
              },
              payment_method: {
                type: 'CREDIT_CARD',
                installments: 1,
                capture: true,
                holder: {
                  name: 'Jose da Silva',
                  tax_id: '12345678909',
                },
              },
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`,
      )
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error('Erro ao criar o produto:', err)
    return err
  }
}
