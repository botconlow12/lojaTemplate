import Image from 'next/image'
import Logo from '../../public/logo.svg'
import { List, MagnifyingGlass, ToteSimple } from 'phosphor-react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full relative py-5 px-6">
      <div className="flex justify-between items-center z-20">
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
  )
}
