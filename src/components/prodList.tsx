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
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={product.href || '/produtos'}
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
              <h1 className="w-full text-[#333] font-medium">
                R${product.price}
              </h1>
              <p className="text-xs font-light">
                ou até {product.parcelamento}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  )
}

interface ProdListProps {
  category?: string
  subcategory?: string
  section?: string
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

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={product.href || '/produtos'}
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
                <h1 className="w-full text-[#333] font-medium">
                  R${product.price}
                </h1>
                <p className="text-xs font-light">
                  ou até {product.parcelamento}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
