import { CaretDown, CaretRight } from 'phosphor-react'
import React, { useState } from 'react'

interface FaqProps {
  title: string
  desc: string
}

export default function Faq({ title, desc }: FaqProps) {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (open) {
      setOpen(false)
      setTimeout(() => setIsOpen(false), 290) // Tempo da animação de slideUp
    } else {
      setIsOpen(true)
      setOpen(true) // Pequeno atraso para permitir a aplicação da classe
    }
  }

  return (
    <div className="w-full border-b border-[#181818]">
      <div
        className="w-full flex justify-start items-center gap-2 p-4 cursor-pointer"
        onClick={handleClick}
      >
        {open ? (
          <CaretDown size={16} weight="fill" />
        ) : (
          <CaretRight size={16} weight="fill" />
        )}
        <h1 className="text-left text-lg font-bold">{title}</h1>
      </div>
      {isOpen && (
        <div
          className={`px-4 pb-4 text-left text-sm transition-all duration-700 ${open ? 'animate-slideDown' : 'animate-slideUp'}`}
        >
          <p>{desc}</p>
        </div>
      )}
    </div>
  )
}
