import { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import {
  List,
  MagnifyingGlass,
  ToteSimple,
  X,
  CaretRight,
  CaretDown,
} from 'phosphor-react'
import Link from 'next/link'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <div className="w-full h-[118px]">
      <div className="w-full fixed top-0 z-30 shadow-xl">
        <div className="w-full py-3 text-xs bg-[#ec6608] text-white">
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
            <Link href="/carrinho">
              <ToteSimple size={26} weight="light" color="#000" />
            </Link>
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
          <div className="w-full">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold "
              onClick={() => toggleCategory('Meninos')}
            >
              Meninos
              {expandedCategory === 'Meninos' ? (
                <CaretDown size={20} className="mr-2" />
              ) : (
                <CaretRight size={20} className="mr-2" />
              )}
            </button>
            {expandedCategory === 'Meninos' && (
              <div className="text-left">
                <Link href="/meninos/tudo" className="block py-1">
                  Tudo
                </Link>
                <Link href="/meninos/tenis" className="block py-1">
                  Tênis
                </Link>
                <Link href="/meninos/sandalia" className="block py-1">
                  Sandália
                </Link>
              </div>
            )}
          </div>

          <div className="w-full">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold "
              onClick={() => toggleCategory('Meninas')}
            >
              Meninas
              {expandedCategory === 'Meninas' ? (
                <CaretDown size={20} className="mr-2" />
              ) : (
                <CaretRight size={20} className="mr-2" />
              )}
            </button>
            {expandedCategory === 'Meninas' && (
              <div className="text-left">
                <Link href="/meninas/tudo" className="block py-1">
                  Tudo
                </Link>
                <Link href="/meninas/tenis" className="block py-1">
                  Tênis
                </Link>
                <Link href="/meninas/sandalia" className="block py-1">
                  Sandália
                </Link>
              </div>
            )}
          </div>

          <div className="w-full">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleCategory('Bebes')}
            >
              Bebês
              {expandedCategory === 'Bebes' ? (
                <CaretDown size={20} className="mr-2" />
              ) : (
                <CaretRight size={20} className="mr-2" />
              )}
            </button>
            {expandedCategory === 'Bebes' && (
              <div className="text-left">
                <Link href="/bebes/tudo" className="block py-1">
                  Tudo
                </Link>
                <Link href="/bebes/tenis" className="block py-1">
                  Tênis
                </Link>
                <Link href="/bebes/sandalia" className="block py-1">
                  Sandália
                </Link>
              </div>
            )}
          </div>
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
