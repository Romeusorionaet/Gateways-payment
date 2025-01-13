import { ButtonPagBank } from '@/components/button-pagBank'
import { ButtonPayPal } from '@/components/button-paypal'
import Image from 'next/image'

export default function Home() {
  const product = {
    id: 'verteejhergre',
    title: 'Smartphone Motorola Moto G84',
    slug: 'smartphone-motorola-moto-g84',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 4,
    imgURL: 'b20ff9fe-2dea-4ea6-85d2-c589f5481e1d-28jn.1.png',
  }

  return (
    <main className="pt-20">
      <h1 className="text-center">Gateways de pagamento</h1>

      <section className="mt-20 flex flex-wrap items-center justify-center gap-4">
        <article
          key={product.id}
          className="flex h-96 w-56 flex-col items-center justify-between rounded-md border p-1 duration-300 hover:bg-slate-900"
        >
          <header className="text-center">
            <h3>{product.title}</h3>
            <p className="mt-2">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </p>
          </header>
          <div className="my-2 h-32 w-32">
            <Image
              width={500}
              height={500}
              src={`https://utfs.io/f/${product.imgURL}`}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
          <footer className="flex flex-col gap-4">
            <p>{product.description}</p>

            <p className="rounded-md bg-green-600 text-center duration-300 hover:bg-green-500">
              Está no Carrinho!
            </p>
          </footer>
        </article>
      </section>

      <section className="mt-20 flex flex-wrap justify-center gap-4">
        <div className="flex w-80 flex-col items-center justify-center space-y-4">
          <div>
            <h2 className="font-bold">Page com PayPal - Email/password</h2>
            <p>Email: sb-syu6m35788775@personal.example.com</p>
            <p>Password: 8Ev%lLi-</p>
          </div>

          <div className="w-56">
            <ButtonPayPal />
          </div>
        </div>

        <div className="spa w-80 space-y-4">
          <div>
            <h2 className="font-bold">Pagar com PagBank</h2>

            <Image
              width={500}
              height={500}
              src="/images/PagBank.png"
              alt=""
              className="h-32"
            />
          </div>

          <div>
            <h3 className="font-bold">PIX</h3>

            <p>
              A opção pix não precisa escanear o qrcode, por ser ambiente de
              teste ele será aprovado em pouco segundos.
            </p>

            <div className="mt-4">
              <h3 className="font-bold">Cartão</h3>

              <p>Em caso de usar opção de cartão utlize o cartão de teste.</p>
              <p>Número: 5240082975622454</p>
              <p>CVV: 123</p>
              <p>Expiração: 12/30</p>
            </div>
          </div>

          <ButtonPagBank />
        </div>
      </section>
    </main>
  )
}
