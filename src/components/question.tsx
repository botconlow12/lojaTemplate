import { FC } from 'react'

interface QuestionProps {
  question: string
  options: string[]
  onAnswer: (selectedOption: string) => void
  feedback: {
    isCorrect: boolean
    selectedOption: string | null
  }
}

const Question: FC<QuestionProps> = ({
  question,
  options,
  onAnswer,
  feedback,
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-brown mb-4">{question}</h2>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={`w-full px-4 py-2 text-lg font-semibold border rounded-lg ${feedback.selectedOption === option ? (feedback.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-white text-black'} transition-colors`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
