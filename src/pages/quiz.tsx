import Header from '@/components/header'
import Quiz from '@/components/quiz'
import Head from 'next/head'

export default function QuizPage() {
  return (
    <>
      <Head>
        <title>Quiz - Cacau Show</title>
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
      <div className="w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-brown-light">
        <Header />
        <Quiz />
      </div>
    </>
  )
}
