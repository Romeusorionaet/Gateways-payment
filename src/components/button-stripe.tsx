'use client'

export function ButtonStripe() {
  const handlePayStripe = async () => {
    try {
      const res = await fetch('/api/stripe', {
        method: 'POST',
      })

      if (res.ok) {
        const data = await res.json()
        console.log(data, '==')
        window.location.href = data
      } else {
        alert('Erro ao conectar com o servidor')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao conectar com o servidor')
    }
  }

  return (
    <button
      onClick={() => handlePayStripe()}
      className="rounded-md bg-green-500 p-2"
    >
      pagar
    </button>
  )
}
