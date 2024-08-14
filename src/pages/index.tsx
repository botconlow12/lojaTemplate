import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cacau Show</title>
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
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-[#e5ded3] ${inter.className}`}
      >
        <Header />
        <div className="w-[95%] flex flex-col justify-center items-center text-center p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-brown mb-5">
            Bem-vindo ao Desafio Da Cacau Show!
          </h1>
          <p className="text-lg text-black mb-4">
            Participe do nosso <b>emocionante desafio</b> sobre <b>chocolate</b>{' '}
            e ganhe acesso as nossas <b>Caixas Brancas</b>!
          </p>
          <p className="text-lg text-black mb-4">
            Ao completar o desafio com sucesso, você terá acesso a uma{' '}
            <b>oferta exclusiva</b> nas <u>caixas brancas</u> e ajudará a
            arrecadar dinheiro para <b>doações</b>.
          </p>
          <p className="text-lg text-black mb-4">
            <b>50% do valor gerado</b> com as vendas será destinado a{' '}
            <b>causas sociais</b>.
          </p>

          <a
            href="/quiz"
            className="w-full px-6 py-3 bg-brown text-xl text-white text-center font-semibold rounded hover:bg-brown-dark transition-colors"
          >
            COMEÇAR QUIZ!
          </a>
        </div>
      </main>
    </>
  )
}
