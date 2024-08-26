import Image from 'next/image'
import Link from 'next/link'
import productsData from '../pages/products/products.json'
import { HeartStraight, PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import Slider from 'react-slick'

interface ProdListProps {
  category?: string
  section?: string
}

export function ProdList({ category, section }: ProdListProps) {
  const [filledHearts, setFilledHearts] = useState<Record<number, boolean>>({})

  const filteredProducts = productsData.products.filter((product) => {
    if (category && section) {
      return product.category === category && product.sections.includes(section)
    } else if (category) {
      return product.category === category
    } else if (section) {
      return product.sections.includes(section)
    }
    return true
  })

  const toggleHeart = (id: number) => {
    setFilledHearts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
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

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2, // Altere o número de slides visíveis conforme necessário
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <Slider {...settings} className="w-full">
      {filteredProducts.map((product) => {
        const originalPrice = parseFloat(product.price)
        const discountPrice = calculateDiscountedPrice(originalPrice)
        const discountPercentage = calculateDiscountPercentage(
          originalPrice,
          discountPrice,
        )

        return (
          <Link
            key={product.id}
            href={`/products/${product.id}` || '/produtos'}
            className="px-1 flex flex-col rounded-lg text-[#333]"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <div className="relative">
              <Image
                alt={product.title}
                src={product.bannerImg}
                quality={100}
                className="w-full h-auto rounded-t-lg"
                width={640}
                height={640}
              />
              <p className="absolute left-3 top-3 text-xs font-bold text-white bg-brown p-[5px] rounded-lg">
                -{Math.round(discountPercentage)}%
              </p>
              <div
                className="absolute right-2 top-2 p-1 rounded-full bg-[#f7f7f7] z-20 cursor-pointer"
                onClick={() => toggleHeart(product.id)}
              >
                <HeartStraight
                  size={18}
                  weight={filledHearts[product.id] ? 'fill' : 'light'}
                  color={filledHearts[product.id] ? '#eb2c44' : '#333'}
                />
              </div>
              <div className="flex items-center gap-[2px] absolute right-2 bottom-2 px-2 py-1 rounded-full bg-[#f7f7f7] z-20 cursor-pointer">
                <p className="text-xs">Comprar</p>
                <PlusCircle size={15} color="#37c76c" />
              </div>
            </div>

            <div className="py-3 px-2 text-left">
              <h1 className="text-sm text-left font-light text-[#333] line-clamp-2">
                {product.title}
              </h1>

              <div className="mt-4">
                <h1 className="w-full text-[#333] font-medium line-through">
                  R$
                  {originalPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                  {/* Preço original */}
                </h1>

                <h1 className="text-[#37c76c] font-medium">
                  R$
                  {discountPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                  {/* Exibe o preço com desconto */}
                </h1>
              </div>
            </div>
          </Link>
        )
      })}
    </Slider>
  )
}

interface ProdListProps {
  category?: string
  subcategory?: string
  section?: string
}

export function ProdList2({ category, subcategory, section }: ProdListProps) {
  // Estado para armazenar quais produtos têm o coração preenchido
  const [filledHearts, setFilledHearts] = useState<Record<number, boolean>>({})

  const filteredProducts = productsData.products.filter((product) => {
    const categoryMatch = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true
    const subcategoryMatch = subcategory
      ? product.subcategory.toLowerCase() === subcategory.toLowerCase()
      : true
    const sectionMatch = section
      ? product.sections
          .map((s) => s.toLowerCase())
          .includes(section.toLowerCase())
      : true

    return categoryMatch && subcategoryMatch && sectionMatch
  })

  const toggleHeart = (id: number) => {
    setFilledHearts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
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

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {filteredProducts.map((product) => {
        const originalPrice = parseFloat(product.price)
        const discountPrice = calculateDiscountedPrice(originalPrice)
        const discountPercentage = calculateDiscountPercentage(
          originalPrice,
          discountPrice,
        )

        return (
          <Link
            key={product.id}
            href={`/products/${product.id}` || '/produtos'}
            className="w-full h-auto flex flex-col items-center gap-2"
          >
            <div
              className="h-full flex flex-col rounded-lg text-[#333]"
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
              <div className="relative">
                <Image
                  alt={product.title}
                  src={product.bannerImg}
                  quality={100}
                  className="w-full h-auto rounded-t-lg"
                  width={640}
                  height={640}
                />
                <p className="absolute left-2 top-2 text-xs font-bold text-white bg-brown p-[5px] rounded-lg">
                  -{Math.round(discountPercentage)}%
                </p>
                <div
                  className="absolute right-2 top-2 p-1 rounded-full bg-[#f7f7f7] z-20 cursor-pointer"
                  onClick={() => toggleHeart(product.id)}
                >
                  <HeartStraight
                    size={18}
                    weight={filledHearts[product.id] ? 'fill' : 'light'}
                    color={filledHearts[product.id] ? '#eb2c44' : '#333'}
                  />
                </div>
                <div className="flex items-center gap-[2px] absolute right-2 bottom-2 px-2 py-1 rounded-full bg-[#f7f7f7] z-20 cursor-pointer">
                  <p className="text-xs">Comprar</p>
                  <PlusCircle size={15} color="#37c76c" />
                </div>
              </div>

              <div className="py-3 px-2 text-left">
                <h1 className="text-sm text-left font-light text-[#333] line-clamp-2">
                  {product.title}
                </h1>

                <div className="mt-4">
                  <h1 className="w-full text-[#333] font-medium line-through">
                    R$
                    {originalPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                    {/* Preço original */}
                  </h1>

                  <h1 className="text-[#37c76c] font-medium">
                    R$
                    {discountPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                    {/* Exibe o preço com desconto */}
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
