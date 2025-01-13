'use client'

import { pagBankCheckout } from '@/actions/pag-bank/pagBank-checkout'

export function ButtonPagBank() {
  const handlePayPagBank = async () => {
    try {
      const result = await pagBankCheckout()

      if (result.links && result.links[1]?.href) {
        window.open(result.links[1].href, '_blank')
      } else {
        console.error('Link de pagamento não encontrado')
      }
    } catch (error) {
      console.error('Erro ao obter o link de pagamento:', error)
    }
  }

  return (
    <button
      onClick={() => handlePayPagBank()}
      className="rounded-md bg-green-500 p-2"
    >
      pagar
    </button>
  )
}
