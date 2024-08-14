import Image, { StaticImageData } from 'next/image'
import { Star, ThumbsDown, ThumbsUp } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface DepProps {
  name: string
  time: string
  desc: string
  ammount: number
  picture?: StaticImageData
}

export default function Dep({ name, time, desc, ammount, picture }: DepProps) {
  const [selectedButton, setSelectedButton] = useState<number | null>(null)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    setLikes(ammount)
  }, [ammount])

  const handleButtonClick = (buttonIndex: number) => {
    if (buttonIndex === 1) {
      if (selectedButton === 1) {
        setSelectedButton(null)
        setLikes(likes - 1)
      } else if (selectedButton === 2) {
        setSelectedButton(1)
        setLikes(likes + 1)
      } else {
        setSelectedButton(1)
        setLikes(likes + 1)
      }
    } else if (buttonIndex === 2) {
      if (selectedButton === 2) {
        setSelectedButton(null)
        setLikes(likes)
      } else if (selectedButton === 1) {
        setSelectedButton(2)
        setLikes(likes - 1)
      } else {
        setSelectedButton(2)
        setLikes(likes)
      }
    }
  }

  return (
    <div className="w-full min-h-[256px] flex flex-col gap-2 p-5">
      <h1 className="text-lg text-left font-bold">{name}</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <Star size={16} weight="fill" color="#ffd700" />
          <Star size={16} weight="fill" color="#ffd700" />
          <Star size={16} weight="fill" color="#ffd700" />
          <Star size={16} weight="fill" color="#ffd700" />
          <Star size={16} weight="fill" color="#ffd700" />
          <Star size={16} weight="fill" color="#ffd700" />
        </div>
        <p className="text-sm text-[#888888]">{time}</p>
      </div>
      <p className="text-left">{desc}</p>
      {picture && (
        <Image alt="dep" src={picture} quality={100} className="rounded-lg" />
      )}
      <div className="w-full flex gap-4">
        <button
          onClick={() => handleButtonClick(1)}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-md font-bold"
          style={{
            background: selectedButton === 1 ? '#003087' : '#E2E8F0',
            color: selectedButton === 1 ? '#fff' : '#000',
            transform: selectedButton === 1 ? 'scale(1.05)' : 'none',
          }}
        >
          <ThumbsUp size={20} weight="fill" />
          {likes}
        </button>

        <button
          onClick={() => handleButtonClick(2)}
          className="w-full flex items-center justify-center p-3 rounded-md font-bold"
          style={{
            background: selectedButton === 2 ? '#003087' : '#E2E8F0',
            color: selectedButton === 2 ? '#fff' : '#000',
            transform: selectedButton === 2 ? 'scale(1.05)' : 'none',
          }}
        >
          <ThumbsDown size={20} weight="fill" />
        </button>
      </div>
    </div>
  )
}
