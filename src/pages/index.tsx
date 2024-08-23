import { Header2 } from '@/components/header'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

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
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 bg-[#e5ded3] ${poppins.className}`}
      >
        <Header2 />
        <div className="w-[95%] flex flex-col justify-center items-center text-center px-7 py-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-brown mb-5">
            Bem-vindo ao Desafio Da Bibi
          </h1>
          <p className="text-lg text-black mb-4">
            Participe do nosso <b>emocionante desafio</b> e desbloqueie
            descontos <b>exclusivos</b>.
          </p>
          <p className="text-lg text-black mb-4">
            Ao completar o desafio <b>com sucesso,</b> você{' '}
            <u>não só ganha descontos,</u> mas também contribui para{' '}
            <b>causas sociais</b>!
          </p>
          <p className="text-lg text-black mb-4">
            <b>50% do valor</b> gerado com as vendas será destinado a{' '}
            <b>iniciativas que fazem a diferença.</b>
          </p>

          <a
            href="/desafios"
            className="w-full px-6 py-3 bg-brown text-xl text-white text-center font-semibold rounded hover:bg-brown-dark transition-colors"
          >
            COMEÇAR DESAFIO!
          </a>
        </div>
      </main>
    </>
  )
}
