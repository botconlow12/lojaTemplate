import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { Header } from '@/components/header'
import { ProdList } from '@/components/prodList'
import Footer from '@/components/footer'
import Image from 'next/image'
import {
  Carroussel,
  Carroussel3,
  Carroussel4,
  Carroussel5,
} from '@/components/carrousel'
import Ct1 from '../../public/ct1.webp'
import Ct2 from '../../public/ct2.webp'
import Ct3 from '../../public/ct3.webp'
import Banner1 from '../../public/banner5.webp'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function InitialPage() {
  return (
    <>
      <Head>
        <title>Calçados Bibi | Fazer o bem, um passinho por vez</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto bg-white ${poppins.className}`}
      >
        <Header />
        <Carroussel />
        <div className="w-full bg-[#f5f5f5] px-4 pt-4 pb-8">
          <Carroussel3 />
        </div>
        <div className="w-[90%] flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-left">
              LANÇAMENTOS DA BIBI!
            </h2>
            <p className="text-xs text-left">
              Confira aqui os produtos perfeitos para todas as aventuras dos
              pequenos!
            </p>
            <ProdList section="Lançamentos" />
          </div>

          <div className="w-full flex flex-col gap-4">
            <a href="/categoria/bebes" className="w-full relative">
              <Image
                className="w-full rounded-xl"
                alt="ct1"
                src={Ct1}
                quality={100}
              />
              <p
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translate(-50%,0)',
                  bottom: '1rem',
                  borderRadius: '100px',
                }}
                className="text-sm text-[#353a42] py-2 px-6 bg-white"
              >
                Bebês
              </p>
            </a>

            <a href="/categoria/meninas" className="w-full relative">
              <Image
                className="w-full rounded-xl"
                alt="ct2"
                src={Ct2}
                quality={100}
              />
              <p
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translate(-50%,0)',
                  bottom: '1rem',
                  borderRadius: '100px',
                }}
                className="text-sm text-[#353a42] py-2 px-6 bg-white"
              >
                Meninas
              </p>
            </a>

            <a href="/categoria/meninos" className="w-full relative">
              <Image
                className="w-full rounded-xl"
                alt="ct3"
                src={Ct3}
                quality={100}
              />
              <p
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translate(-50%,0)',
                  bottom: '1rem',
                  borderRadius: '100px',
                }}
                className="text-sm text-[#353a42] py-2 px-6 bg-white"
              >
                Meninos
              </p>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-left">
              OS BÁSICOS PARA TODAS AS OCASIÕES!
            </h2>
            <p className="text-xs text-left">
              Confira uma seleção de tênis infantis da Bibi para acompanhar as
              crianças em todas as aventuras do dia a dia!
            </p>
            <ProdList section="OS BÁSICOS PARA TODAS AS OCASIÕES!" />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-left">
              NAVEGUE NAS CATEGORIAS
            </h2>
            <Carroussel4 />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-left">
              AS MELHORES PROMOÇÕES DA BIBI
            </h2>
            <p className="text-xs text-left">
              Aproveite os calçados da Bibi com descontos imperdíveis!
            </p>
            <ProdList section="AS MELHORES PROMOÇÕES DA BIBI" />
          </div>

          <Image
            className="w-full rounded-md"
            alt="banner"
            src={Banner1}
            quality={100}
          />
        </div>

        <div className="w-full flex flex-col items-left gap-3 text-left mt-8 px-4 pt-4 pb-8 bg-[#f5f5f5]">
          <h1 className="text-[#ec6608] text-lg">Todo calçado Bibi tem</h1>
          <Carroussel5 />
        </div>

        <Footer />
      </main>
    </>
  )
}
