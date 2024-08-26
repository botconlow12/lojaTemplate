import Image from 'next/image'
import Logo from '../../public/logowhite.svg'
import Svg11 from '../../public/svg11.svg'
import Svg12 from '../../public/svg12.svg'
import Svg13 from '../../public/svg13.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex flex-col justify-around items-center gap-4 py-8 px-4 bg-[#ff8c3c] text-white text-center">
        <Image alt="logo" src={Logo} quality={100} width={100} />
        <div className="w-full flex">
          <div className="w-full flex flex-col items-start gap-1">
            <h1 className="text-lg font-semibold">CATEGORIAS</h1>
            <Link
              href="/categoria/meninos"
              className="font-light transition hover:underline"
            >
              Meninas
            </Link>
            <Link
              href="/categoria/meninas"
              className="font-light transition hover:underline"
            >
              Meninos
            </Link>
            <Link
              href="/categoria/bebes"
              className="font-light transition hover:underline"
            >
              Bebês
            </Link>
          </div>

          <div className="w-full flex flex-col items-start gap-1">
            <h1 className="text-lg font-semibold">POLÍTICAS</h1>
            <Link
              href="/politica-de-privacidade"
              className="font-light transition hover:underline"
            >
              Política de privacidade
            </Link>
            <Link
              href="/politica-de-troca"
              className="font-light transition hover:underline"
            >
              Política de devoluções
            </Link>
            <Link
              href="/politica-de-frete"
              className="font-light transition hover:underline"
            >
              Política de frete
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2 py-4 bg-[#f9f9f9]">
        <h1 className="font-bold text-[13px]">LOJA VERIFICADA</h1>
        <div className="w-[80%] flex justify-start gap-[15px]">
          <Image alt="metodo" src={Svg11} quality={100} className="w-full" />
          <Image alt="metodo" src={Svg12} quality={100} className="w-full" />
          <Image alt="metodo" src={Svg13} quality={100} className="w-full" />
        </div>
      </div>
    </footer>
  )
}
