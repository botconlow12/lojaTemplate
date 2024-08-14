import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Success() {
  return (
    <>
      <Head>
        <title>Compra Confirmada - Cacau Show</title>
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
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-[#e5ded3] ${inter.className}`}
      >
        <Header />
        <div className="w-[95%] flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl text-center font-bold text-brown mb-6">
            Compra Confirmada!
          </h1>
          <p className="text-lg text-black mb-4">
            Sua compra das <b>Caixas Brancas</b> foi confirmada com sucesso!
          </p>
          <p className="text-lg text-black mb-4">
            Lembre-se que <b>50% do valor gerado</b> será destinado a{' '}
            <b>causas sociais</b>. Obrigado por contribuir e esperamos que você
            aproveite seus chocolates!
          </p>
          <a
            href="/"
            className="w-full px-6 py-3 bg-brown text-xl text-white text-center font-semibold rounded hover:bg-brown-dark transition-colors"
          >
            Voltar à Página Inicial
          </a>
        </div>
      </main>
    </>
  )
}
