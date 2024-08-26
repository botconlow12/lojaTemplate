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
          <h1 className="text-2xl text-center font-bold mb-5">
            Política de trocas e devoluções
          </h1>
          <p className="text-lg">
            Esperamos que nunca seja necessário você trocar o seu calçado da
            Bibi, mas sabemos que eventualmente isso pode acontecer. Nestes
            casos, confira nossa política de trocas e devoluções, e veja como
            funciona nosso procedimento. Compras realizadas nas modalidades de
            retirada e entregas expressas, são trocados diretamente na loja de
            origem ou via Central de Atendimento.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
