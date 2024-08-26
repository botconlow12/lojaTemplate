import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Calçados Bibi | Fazer o bem, um passinho por vez</title>
        <meta
          name="description"
          content="Participe do nosso quiz sobre chocolate e ajude a arrecadar dinheiro para doações. 50% do valor gerado será destinado a causas sociais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-between gap-12 ${poppins.className}`}
      >
        <Header />
        <div className="w-[95%] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-brown mb-3">Institucional</h1>
          <h1 className="text-2xl font-bold mb-5">Política de privacidade</h1>
          <p className="font-bold">Frete do site: </p>
          <p className="text-lg">
            O frete se torna grátis em pedidos com ticket acima de R$ 50,90, com
            as seguintes regras: -O valor final do seu pedido será considerado
            para garantir o frete grátis, já com a aplicação de cupons, caso
            você o tenha; -Ao atingir o valor informado, o frete será por nossa
            conta de forma automática; -A modalidade de entrega será econômica,
            confira o prazo de entrega ao finalizar o seu pedido; -Produtos que
            são despachados de uma loja física não fazem parte da promoção de
            frete grátis (são pedidos de Entrega Expressa, Total Express, PAC
            Platinum e Sedex Platinum);
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
