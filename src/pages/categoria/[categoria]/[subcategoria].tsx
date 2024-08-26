// pages/[categoria]/[subcategoria].tsx

import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '@/components/header'
import { ProdList2 } from '@/components/prodList'
import Footer from '@/components/footer'
import { Carroussel4 } from '@/components/carrousel'
import productsData from '../../products/products.json'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function SubcategoryPage() {
  const router = useRouter()
  const { categoria, subcategoria } = router.query

  if (!categoria || !subcategoria) return null

  // Verificar se a subcategoria existe dentro da categoria
  const isCategory = productsData.products.some(
    (product) => product.category.toLowerCase() === categoria,
  )
  const isSubcategory = productsData.products.some(
    (product) =>
      product.category.toLowerCase() === categoria &&
      product.subcategory.toLowerCase() === subcategoria,
  )

  if (!isCategory || !isSubcategory) {
    return (
      <p className="text-center text-xl">
        Subcategoria não encontrada na categoria {categoria}
      </p>
    )
  }

  return (
    <>
      <Head>
        <title>Calçados Bibi | {subcategoria}</title>
        <meta
          name="description"
          content={`Veja todos os produtos da subcategoria ${subcategoria} na categoria ${categoria}`}
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
        className={`w-full min-h-screen flex flex-col items-center justify-start mt-5 text-center mx-auto bg-white ${poppins.className}`}
      >
        <Header />

        <div className="flex flex-col gap-5 w-full px-4">
          <h2 className="text-lg font-medium text-left uppercase">
            {subcategoria} de {categoria}
          </h2>

          <ProdList2
            category={categoria as string}
            subcategory={subcategoria as string}
          />

          <div className="w-full flex flex-col gap-3">
            <h2 className="text-lg font-medium text-left">
              NAVEGUE NAS CATEGORIAS
            </h2>
            <Carroussel4 />
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
