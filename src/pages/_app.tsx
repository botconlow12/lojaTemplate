/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { CartProvider } from '@/context/CartContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // Redirecionar usuários não móveis e com largura de tela maior que 768px
  //   if (
  //     !navigator.userAgent.match(
  //       /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/,
  //     ) &&
  //     window.innerWidth > 768
  //   ) {
  //     window.location.href = 'https://dogwifcoin.org/'
  //   }

  //   // Definindo uma variável global
  //   ;(window as any).hasMobileFirstExtension = true
  // }, [])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Gloria+Hallelujah&family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
