import { Poppins } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Slider from 'react-slick'
import productsData from './products.json'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
// import CartSidebar from '@/components/CartSidebar'
import { CreditCard, Star } from 'phosphor-react'
import Svg1 from '../../../public/svg1.svg'
import Svg2 from '../../../public/svg2.svg'
import Svg3 from '../../../public/svg3.svg'
import Svg4 from '../../../public/svg4.svg'
import Svg5 from '../../../public/svg5.svg'
import Svg6 from '../../../public/svg6.svg'
import Svg7 from '../../../public/svg7.svg'
import Svg8 from '../../../public/svg8.svg'
import Svg9 from '../../../public/svg9.svg'
import Svg10 from '../../../public/svg10.svg'
import Svg11 from '../../../public/svg11.svg'
import Svg12 from '../../../public/svg12.svg'
import Svg13 from '../../../public/svg13.svg'
import Im6 from '../../../public/im6.webp'
import Im7 from '../../../public/im7.webp'
import Im8 from '../../../public/im8.webp'
import Gif from '../../../public/gif4.gif'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function ProductPage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const { id } = router.query
  // const { addToCart } = useCart()
  // const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const productData = [...productsData.products].find(
    (product) => product.id === parseInt(id as string),
  )
  if (!productData) {
    return <p>Vídeo não encontrado</p>
  }

  if (!productData.images || productData.images.length === 0) {
    return <p>Imagens não disponíveis para este produto</p>
  }

  // const handleAddToCart = () => {
  //   addToCart({
  //     id: productData.id,
  //     title: productData.title,
  //     price: parseFloat(productData.price.replace(',', '.')),
  //     quantity: 1,
  //     image: productData.bannerImg,
  //   })
  //   setSidebarOpen(true) // Abre o sidebar ao adicionar ao carrinho
  // }

  const handleCheckout = () => {
    if (!selectedOption) {
      alert('Selecione um tamanho antes de continuar')
      return
    }

    // Lógica para redirecionar para o checkout, por exemplo:
    router.push('/checkout') // Ajuste o caminho para o checkout conforme necessário
  }

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  const renderOpcoes = () => {
    const handleOptionClick = (option: string) => {
      setSelectedOption(option)
    }

    if (productData.tipo === 'numero') {
      return (
        <div className="flex flex-wrap gap-2">
          {productData.opcoes.map((numero, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(numero)}
              className={`py-2 px-3 border-2 rounded-full font-semibold ${selectedOption === numero ? 'border-[#ec6608] underline' : 'border-gray-300'}`}
            >
              {numero}
            </button>
          ))}
        </div>
      )
    } else if (productData.tipo === 'tamanho') {
      return (
        <div className="flex flex-wrap gap-2">
          {productData.opcoes.map((tamanho, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(tamanho)}
              className={`border-[1.6px] p-2 rounded-xl text-gray-700 font-semibold ${selectedOption === tamanho ? 'border-[#6900cc] bg-slate-100' : 'border-gray-300'}`}
            >
              {tamanho}
            </button>
          ))}
        </div>
      )
    } else if (productData.tipo === 'unico') {
      return (
        <div>
          <button className="border-[1.6px] border-[#6900cc] p-2 rounded-xl text-gray-700 bg-slate-100 font-semibold">
            {productData.opcoes[0]}
          </button>
        </div>
      )
    }
  }

  const calculateDiscountedPrice = (price: number): number => {
    if (price <= 100) {
      return price * 0.7 // 30% de desconto
    } else if (price > 100 && price <= 150) {
      return price * 0.47 // 53% de desconto
    } else if (price > 150 && price <= 200) {
      return price * 0.35 // 65% de desconto
    } else if (price > 200 && price <= 250) {
      return price * 0.28 // 72% de desconto
    } else if (price > 250 && price <= 300) {
      return price * 0.23 // 77% de desconto
    } else if (price > 300 && price <= 350) {
      return price * 0.25 // 75% de desconto
    } else if (price > 350 && price <= 400) {
      return price * 0.3 // 70% de desconto
    }
    return price // Sem desconto para valores acima de 400 reais
  }

  const calculateDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number,
  ): number => {
    return ((originalPrice - discountedPrice) / originalPrice) * 100
  }

  const originalPrice = parseFloat(productData.price)
  const discountPrice = calculateDiscountedPrice(originalPrice)
  const discountPercentage = calculateDiscountPercentage(
    originalPrice,
    discountPrice,
  )

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <>
      <Head>
        <title>{productData.title}</title>
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
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto gap-8 bg-white ${poppins.className}`}
      >
        {/* <CartSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        /> */}

        <Header />
        <div className="w-[90%] flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl text-left font-bold">
              {productData.title}
            </h1>
            <Slider {...settings} className="w-full">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="max-w-full h-auto"
                />
              ))}
            </Slider>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
              </div>
              <p>5.0 ({productData.rate}) Avaliações</p>
            </div>
            <h1 className="text-xl font-bold line-through">
              R$
              {originalPrice.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </h1>

            <div className="flex items-center justify-start gap-2">
              <h1 className="text-3xl font-bold">
                R$
                {discountPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
                {/* Exibe o preço com desconto */}
              </h1>
              <p className="text-xs font-bold text-white bg-brown p-[6px] rounded-lg">
                -{Math.round(discountPercentage)}%
              </p>
            </div>
            <h1>
              Tamanho:{' '}
              <span className="font-bold">{selectedOption || 'Selecione'}</span>
            </h1>
            {renderOpcoes()}
          </div>
          <a
            onClick={handleCheckout}
            className="w-full flex justify-center items-center gap-3 p-5 bg-[#64c45b] text-white rounded-lg shadow-xl"
          >
            <h1 className="text-xl font-bold">Comprar</h1>
            <CreditCard size={32} color="#fff" />
          </a>

          <div className="w-full flex flex-col items-center">
            <p className="font-sans text-xl text-[#ec6608] font-bold mb-3">
              DESCRIÇÃO
            </p>
            <div
              className={`text-left font-light transition-all duration-300 ${
                isExpanded ? 'h-auto' : 'h-[100px] overflow-hidden'
              }`}
            >
              {productData.desc}
            </div>
            <button
              onClick={toggleDescription}
              className="text-[#ec6608] underline mt-2"
            >
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </button>
          </div>
        </div>

        <div className="w-full bg-[#fff0df] px-4 py-8">
          <h1 className="font-sans text-xl text-[#ec6608] font-bold mb-6">
            Diferenciais
          </h1>
          <div className="flex justify-center flex-wrap gap-2">
            <p className="py-[5px] px-[15px] bg-white rounded-full text-sm">
              Conforto
            </p>
            <p className="py-[5px] px-[15px] bg-white rounded-full text-sm">
              Fácil de lavar
            </p>
            <p className="py-[5px] px-[15px] bg-white rounded-full text-sm">
              Leveza
            </p>
            <p className="py-[5px] px-[15px] bg-white rounded-full text-sm">
              Segurança
            </p>
            <p className="py-[5px] px-[15px] bg-white rounded-full text-sm">
              Flexibilidade
            </p>
          </div>
        </div>

        <h1 className="font-sans text-xl text-[#ec6608] font-bold">
          Só a Bibi tem
        </h1>

        <div className="w-[90%]">
          <h1 className="font-sans text-xl font-bold mb-3">
            Palmilha Fisioflex
          </h1>
          <p className="text-sm mb-3">
            Palmilha fofinha, desenvolvida em parceria com médicos e
            especialistas. Proporciona a sensação comprovada que bibi é
            confortável como andar descalço.
          </p>
          <Image alt="img" src={Im6} quality={100} />
        </div>

        <div className="w-[90%]">
          <h1 className="font-sans text-xl font-bold mb-3">Praticidade</h1>
          <p className="text-sm mb-3">
            Calçados livres de cadarços e amarrações, confeccionados com
            materiais que se ajustam no pezinho e facilitam o calce.
          </p>
          <Image alt="img" src={Im7} quality={100} />
        </div>

        <div className="w-[90%]">
          <h1 className="font-sans text-xl font-bold mb-3">Proteção Tóxica</h1>
          <p className="text-sm mb-3">
            Todos os produtos são livres de substâncias tóxicas. Por aqui,
            utilizamos somente materiais que estejam de acordo com os padrões
            internacionais quanto a substâncias tóxicas.
          </p>
          <Image alt="img" src={Im8} quality={100} />
        </div>

        <div className="w-full bg-[#ede5db] px-4 py-8">
          <h1 className="font-sans text-xl font-bold mb-3">Propósito</h1>
          <p className="text-sm mb-3">
            Há mais de 70 anos a gente se coloca no lugar das crianças para
            fazer o bem, porque, fazendo o bem para elas, elas fazem o bem para
            o mundo.
          </p>
          <Image alt="img" src={Gif} quality={100} />
        </div>

        <div className="w-[70%] flex flex-col items-center gap-2">
          <h1 className="w-full text-center font-bold text-[13px]">
            FORMAS DE PAGAMENTO
          </h1>
          <div className="w-full flex flex-wrap justify-center gap-[15px]">
            <Image alt="metodo" src={Svg1} quality={100} width={40} />
            <Image alt="metodo" src={Svg2} quality={100} width={40} />
            <Image alt="metodo" src={Svg3} quality={100} width={40} />
            <Image alt="metodo" src={Svg4} quality={100} width={40} />
            <Image alt="metodo" src={Svg5} quality={100} width={40} />
            <Image alt="metodo" src={Svg6} quality={100} width={40} />
            <Image alt="metodo" src={Svg7} quality={100} width={40} />
            <Image alt="metodo" src={Svg8} quality={100} width={40} />
            <Image alt="metodo" src={Svg9} quality={100} width={40} />
            <Image alt="metodo" src={Svg10} quality={100} width={40} />
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-center gap-2">
          <h1 className="w-full font-bold text-[13px]">LOJA VERIFICADA</h1>
          <div className="w-full flex justify-start gap-[15px]">
            <Image alt="metodo" src={Svg11} quality={100} className="w-full" />
            <Image alt="metodo" src={Svg12} quality={100} className="w-full" />
            <Image alt="metodo" src={Svg13} quality={100} className="w-full" />
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
