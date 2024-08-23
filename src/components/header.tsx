import Image from 'next/image'
import Logo from '../../public/logo.svg'
import { List, MagnifyingGlass, ToteSimple } from 'phosphor-react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full h-[118px] mb-5">
      <div className="w-full fixed top-0 z-30 shadow-xl">
        <div className="w-full py-3 text-xs bg-[#ec6608] text-white">
          <p>
            Ganhe <u>70% OFF</u> na primeira compra!
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
            <List size={26} weight="light" />
          </div>
        </div>
      </div>
    </div>
  )
}
