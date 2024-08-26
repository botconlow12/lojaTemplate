import { Poppins } from 'next/font/google'
import { Header2 } from '@/components/header'
import Quiz from '@/components/quiz'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function QuizPage() {
  return (
    <>
      <Head>
        <title>Desafio - Bibi</title>
        <meta
          name="description"
          content="Sua compra foi confirmada com sucesso! Aproveite suas Caixas Brancas e lembre-se que 50% do valor gerado foi destinado a causas sociais."
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
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-[#e5ded3] ${poppins.className}`}
      >
        <div className="w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-brown-light">
          <Header2 />
          <Quiz />
        </div>
      </main>
    </>
  )
}
