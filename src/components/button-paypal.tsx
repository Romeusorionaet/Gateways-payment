'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useState } from 'react'

export function ButtonPayPal() {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const initialOptions = {
    clientId:
      'AUuAQzSxlKp_KpLoe1kQinoqtnotE_j5xxclVEmQxd3pD-0bRjieRrsJ4Ob5xLKZUnGbxtluTUZjWGWY',
    currency: 'BRL',
    intent: 'capture',
  }

  const handleApprove = (orderID: string) => {
    console.log(orderID)
    setPaidFor(true)
  }

  if (paidFor) {
    alert('Compra realizada com sucesso!')
  }

  if (error) {
    alert('Error')
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        onClick={(_, actions) => {
          const hasAlreadyBoughtProduct = false
          if (hasAlreadyBoughtProduct) {
            setError('Você já comprou este produto.')
            return actions.reject()
          } else {
            return actions.resolve()
          }
        }}
        createOrder={(_, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: 'BRL',
                  value: '4',
                },
              },
            ],
          })
        }}
        onApprove={async (data, actions) => {
          if (actions?.order) {
            const order = await actions.order.capture()
            console.log(order)
            handleApprove(data.orderID)
          }
        }}
        onError={(err: any) => {
          setError(err)
          console.log('PayPal Checkout onError')
        }}
      />
    </PayPalScriptProvider>
  )
}
