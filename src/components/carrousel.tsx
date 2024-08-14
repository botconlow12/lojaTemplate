import Image from 'next/image'
import Slider from 'react-slick'
import { Truck } from 'phosphor-react'
import Banner1 from '../../public/banner1.gif'
import Banner2 from '../../public/banner2.webp'
import Banner3 from '../../public/banner3.webp'
import Banner4 from '../../public/banner4.webp'
import Im1 from '../../public/im1.webp'
import Im2 from '../../public/im2.gif'
import Im3 from '../../public/im3.webp'
import Im4 from '../../public/im4.webp'
import Im5 from '../../public/im5.webp'
import Gif1 from '../../public/gif1.gif'
import Gif2 from '../../public/gif2.gif'
import Gif3 from '../../public/gif3.gif'

export function Carroussel() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="w-full">
      <Image alt="banner" src={Banner1} quality={100} />
      <Image alt="banner" src={Banner2} quality={100} />
      <Image alt="banner" src={Banner3} quality={100} />
      <Image alt="banner" src={Banner4} quality={100} />
    </Slider>
  )
}

export function Carroussel3() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="w-full flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className=" w-max flex items-center gap-3 py-[10px] px-5 bg-[#ec6608] text-white rounded-[6.5rem]">
          <Truck size={20} />
          <p className="text-sm font-medium underline">
            Frete Grátis é na Bibi
          </p>
        </div>
      </div>
    </Slider>
  )
}

export function Carroussel4() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="">
      <div className="w-full relative pr-3">
        <Image
          className="w-full rounded-md"
          alt="ct3"
          src={Im1}
          quality={100}
        />
        <a
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,0)',
            bottom: '1rem',
            borderRadius: '100px',
          }}
          className="text-sm text-[#353a42] py-1 px-6 bg-white"
        >
          Tênis
        </a>
      </div>

      <div className="w-full relative pr-3">
        <Image
          className="w-full rounded-md"
          alt="ct3"
          src={Im2}
          quality={100}
        />
        <a
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,0)',
            bottom: '1rem',
            borderRadius: '100px',
          }}
          className="text-sm text-[#353a42] py-1 px-6 bg-white"
        >
          Luz
        </a>
      </div>

      <div className="w-full relative pr-3">
        <Image
          className="w-full rounded-md"
          alt="ct3"
          src={Im3}
          quality={100}
        />
        <a
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,0)',
            bottom: '1rem',
            borderRadius: '100px',
          }}
          className="text-sm text-[#353a42] py-1 px-6 bg-white"
        >
          Botas
        </a>
      </div>

      <div className="w-full relative pr-3">
        <Image
          className="w-full rounded-md"
          alt="ct3"
          src={Im4}
          quality={100}
        />
        <a
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,0)',
            bottom: '1rem',
            borderRadius: '100px',
          }}
          className="text-sm text-[#353a42] py-1 px-6 bg-white"
        >
          Sandálias
        </a>
      </div>

      <div className="w-full relative pr-3">
        <Image
          className="w-full rounded-md"
          alt="ct3"
          src={Im5}
          quality={100}
        />
        <a
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%,0)',
            bottom: '1rem',
            borderRadius: '100px',
          }}
          className="text-sm text-[#353a42] py-1 px-6 bg-white"
        >
          Chinelos
        </a>
      </div>
    </Slider>
  )
}

export function Carroussel5() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className="w-full">
      <div className="w-full text-left">
        <Image className="rounded-md" alt="gif" src={Gif1} quality={100} />
        <h2 className="font-medium mt-3">CONFORTO</h2>
        <p className="font-light text-sm mt-3">
          Palmilha fofinha que proporciona a sensação de andar descalço e deixa
          os pezinhos livres para se desenvolver ao natural
        </p>
      </div>

      <div className="w-full text-left">
        <Image className="rounded-md" alt="gif" src={Gif2} quality={100} />
        <h2 className="font-medium mt-3">PROTEÇÃO NÃO TÓXICA</h2>
        <p className="font-light text-sm mt-3">
          Produtos seguros e livres de substâncias tóxicas, sinônimo de mais
          segurança para os pequenos
        </p>
      </div>

      <div className="w-full text-left">
        <Image className="rounded-md" alt="gif" src={Gif3} quality={100} />
        <h2 className="font-medium mt-3">FÁCIL DE CALÇAR</h2>
        <p className="font-light text-sm mt-3">
          Feito com materiais que facilitam o calce e livre de armações
        </p>
      </div>
    </Slider>
  )
}
