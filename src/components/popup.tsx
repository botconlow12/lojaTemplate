import { ReactNode } from 'react'

interface PopupProps {
  children: ReactNode
  onClose?: () => void
}

const Popup = ({ children, onClose }: PopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-cream p-6 rounded shadow-lg max-w-sm w-full">
        {children}
        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-brown text-white rounded"
          >
            Fechar
          </button>
        )}
      </div>
    </div>
  )
}

export default Popup
