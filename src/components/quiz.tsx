import { useState } from 'react'
import Question from './question'

const questions = [
  {
    question:
      'Em que ano foi fundada a marca Bibi, conhecida por oferecer calçados infantis confortáveis e inovadores?',
    options: ['1949', '1959', '1969'],
    answer: '1949',
    hint: 'Foi na década de 40.',
  },
  {
    question: 'Qual destas ações a Bibi realiza para ajudar a natureza?',
    options: [
      'Joga fora todo o material não utilizado',
      'Não se preocupa com o meio ambiente',
      'Usa materiais recicláveis em seus produtos',
    ],
    answer: 'Usa materiais recicláveis em seus produtos',
    hint: 'Esta prática é uma das formas de tornar os produtos mais sustentáveis.',
  },
  {
    question: 'Qual dessas cores é identidade da Bibi?',
    options: ['Verde', 'Laranja', 'Marrom'],
    answer: 'Laranja',
    hint: 'É uma cor vibrante e alegre, frequentemente associada a energia e criatividade.',
  },
  {
    question: 'Qual é a melhor maneira de limpar seus calçados bibi?',
    options: [
      'Limpar com pano úmido e sabão neutro',
      'Passar cera de sapato',
      'Deixar ao sol por horas',
    ],
    answer: 'Limpar com pano úmido e sabão neutro',
    hint: 'É uma prática comum para manter a qualidade do material.',
  },
  {
    question: 'Qual é o principal público-alvo dos calçados Bibi?',
    options: ['Bebês e crianças', 'Adultos', 'Idosos'],
    answer: 'Bebês e crianças',
    hint: 'A Bibi é conhecida por criar calçados para os primeiros passos.',
  },
  {
    question: 'O que a Bibi mais valoriza ao criar seus calçados?',
    options: [
      'Aparência acima de tudo',
      'Conforto e segurança para as crianças',
      'Moda para adultos',
    ],
    answer: 'Conforto e segurança para as crianças',
    hint: 'A prioridade é sempre o bem-estar dos pequenos.',
  },
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean
    selectedOption: string | null
  }>({ isCorrect: false, selectedOption: null })
  const [showErrorModal, setShowErrorModal] = useState(false)

  const handleAnswer = (selectedOption: string) => {
    const isCorrect = questions[currentQuestion].answer === selectedOption
    setFeedback({ isCorrect, selectedOption })

    setTimeout(() => {
      if (isCorrect) {
        if (currentQuestion === questions.length - 1) {
          setQuizCompleted(true)
        } else {
          setCurrentQuestion(currentQuestion + 1)
        }
        setShowErrorModal(false)
      } else {
        setShowErrorModal(true)
      }
      setFeedback({ isCorrect: false, selectedOption: null })
    }, 1000)
  }

  const handleCloseErrorModal = () => {
    setShowErrorModal(false)
  }

  return (
    <div className="w-[95%] flex flex-col justify-center items-center text-center p-8 bg-white rounded-lg shadow-lg relative">
      <h1 className="text-3xl font-sans font-bold text-brown mb-6 underline">
        Quiz Bibi
      </h1>
      {!quizCompleted && (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            feedback={feedback}
          />
          {showErrorModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="w-[90%] flex flex-col items-center gap-4 max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-3xl font-sans font-bold underline text-red-500">
                  VOCÊ ERROU!
                </h2>
                <p className="text-lg text-black">
                  <u>
                    <b>Dica:</b>
                  </u>{' '}
                  {questions[currentQuestion].hint}
                </p>
                <button
                  onClick={handleCloseErrorModal}
                  className="px-6 py-3 bg-brown text-white text-xl font-semibold rounded hover:bg-brown-dark transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {quizCompleted && (
        <div className="w-full flex flex-col gap-3 text-center">
          <h2 className="text-2xl font-bold text-brown">Parabéns!</h2>
          <p className="text-lg text-black">
            Você completou o desafio <u>com sucesso</u> e ganhou{' '}
            <b>acesso a descontos exclusivos!</b>
          </p>
          <p className="font-bold">Aproveite!</p>
          <a
            href="/produtos"
            className="w-full px-6 py-3 bg-brown text-xl text-white text-center font-semibold rounded hover:bg-brown-dark transition-colors"
          >
            Ir para a Compra
          </a>
        </div>
      )}
    </div>
  )
}

export default Quiz
