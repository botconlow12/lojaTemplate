// components/header.tsx

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import { List, MagnifyingGlass, X, CaretRight, CaretDown } from 'phosphor-react'
import Link from 'next/link'
import { products } from '../pages/products/products.json'
import { useRouter } from 'next/router'

interface CategoriesProps {
  title: string
  subcategories: string[]
}

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const router = useRouter()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const getCategories = () => {
    const categories = products.map((product) => product.category)
    const uniqueCategories = categories.filter(
      (value, index, self) => self.indexOf(value) === index,
    )

    return uniqueCategories
  }

  const getSubcategories = (category: string) => {
    const subcategories = products
      .filter((product) => product.category === category)
      .map((product) => product.subcategory)

    // Without new Set, the array will have repeated values
    const uniqueSubcategories = subcategories.filter(
      (value, index, self) => self.indexOf(value) === index,
    )

    return uniqueSubcategories
  }

  useEffect(() => {
    const categories = getCategories()
    const categoriesWithSubcategories = categories.map((category) => ({
      title: category,
      subcategories: getSubcategories(category),
    }))

    setCategories(categoriesWithSubcategories)
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      setIsSidebarOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="w-full h-[118px]">
      <div className="w-full fixed top-0 z-30 shadow-xl">
        <div className="w-full py-3 text-xs text-center bg-[#ec6608] text-white">
          <p>
            Ganhe até <u>80% OFF</u> na primeira compra!
          </p>
        </div>
        <div className="w-full flex justify-between items-center bg-white py-5 px-7">
          <Link href="/produtos">
            <Image
              src={Logo}
              alt="logo"
              width={90}
              quality={100}
              className="z-20"
            />
          </Link>
          <div className="flex gap-4">
            <MagnifyingGlass size={26} weight="light" />
            <button onClick={toggleSidebar}>
              <List size={26} weight="light" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="flex justify-between p-4">
          <Image alt="logo" src={Logo} quality={100} />
          <button onClick={toggleSidebar}>
            <X size={26} weight="light" />
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start p-4">
          {categories.map((category) => (
            <div className="w-full" key={category.title}>
              <button
                className="w-full flex justify-between items-center text-lg font-semibold"
                onClick={() => toggleCategory(category.title)}
              >
                {category.title}
                {expandedCategory === category.title ? (
                  <CaretDown size={20} />
                ) : (
                  <CaretRight size={20} />
                )}
              </button>
              {expandedCategory === category.title && (
                <div className="text-left pl-4">
                  {/* Link "Tudo" direciona para a URL da categoria */}
                  {/* <Link
                    href={`/categoria/${category.title.toLowerCase()}`}
                    className="block py-1"
                  >
                    Tudo
                  </Link> */}
                  {category.subcategories.map((subcategory) => (
                    <Link
                      href={`/categoria/${category.title.toLowerCase()}/${subcategory.toLowerCase()}`}
                      className="block py-1"
                      key={subcategory}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header2() {
  return (
    <div className="w-full flex justify-center items-center bg-white py-5 px-7">
      <Image src={Logo} alt="logo" width={90} quality={100} />
    </div>
  )
}
