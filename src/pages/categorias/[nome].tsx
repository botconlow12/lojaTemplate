import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/header'
import ProdList from '@/components/prodList'
import Footer from '@/components/footer'
import { Carroussel4 } from '@/components/carrousel'
import productsData from '../products/products.json'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function CategoryPage() {
  const router = useRouter()
  const { nome } = router.query

  if (!nome) return null

  // Verificar se o nome corresponde a uma categoria ou seção
  const isCategory = productsData.products.some(
    (product) => product.category === nome,
  )
  const isSection = productsData.products.some((product) =>
    product.sections.includes(nome as string),
  )

  if (!isCategory && !isSection) {
    return (
      <p className="text-center text-xl">Categoria ou Seção não encontrada</p>
    )
  }

  return (
    <>
      <Head>
        <title>Calçados Bibi | {nome}</title>
        <meta
          name="description"
          content={`Veja todos os produtos da ${isCategory ? 'categoria' : 'seção'} ${nome}`}
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
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto bg-white ${poppins.className}`}
      >
        <Header />

        <div className="flex flex-col gap-3 w-full px-4">
          <h2 className="text-lg font-medium text-left">
            {isCategory
              ? `Produtos na categoria: ${nome}`
              : `Produtos na seção: ${nome}`}
          </h2>

          <ProdList
            category={isCategory ? (nome as string) : undefined}
            section={isSection ? (nome as string) : undefined}
          />

          <Carroussel4 />
        </div>

        <Footer />
      </main>
    </>
  )
}
