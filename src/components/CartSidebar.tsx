// // src/components/CartSidebar.tsx
// import React from 'react'
// import { useCart } from '@/context/CartContext'
// import Link from 'next/link'
// import { Trash, X } from 'phosphor-react'
// import Image from 'next/image'

// const CartSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
//   isOpen,
//   onClose,
// }) => {
//   const { cart, removeFromCart, updateQuantity, productQuantities } = useCart() // Assumindo que productQuantities é um mapeamento dos IDs dos produtos para quantidades disponíveis

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

//   const handleQuantityChange = (itemId: number, quantity: number) => {
//     updateQuantity(itemId, quantity)
//   }

//   return (
//     <div
//       className={`z-20 fixed top-0 right-0 h-full w-80 overflow-auto bg-white border-l border-gray-200 shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
//     >
//       <div className="flex justify-between items-center p-4 border-b">
//         <h2 className="text-xl font-bold">Carrinho</h2>
//         <X
//           size={24}
//           weight="bold"
//           className="cursor-pointer"
//           onClick={onClose}
//         />
//       </div>
//       <div className="flex flex-col gap-4 p-4">
//         {cart.length === 0 ? (
//           <p>Seu carrinho está vazio.</p>
//         ) : (
//           <div className="w-full flex flex-col gap-6">
//             {cart.map((item) => {
//               const maxQuantity = productQuantities[item.id] || 0 // Quantidade disponível para o produto

//               return (
//                 <div
//                   key={item.id}
//                   className="flex flex-col items-start gap-4 text-left"
//                 >
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={item.image} // Caminho da imagem
//                       alt={item.title}
//                       width={64} // Largura da imagem
//                       height={64} // Altura da imagem
//                       className="rounded-md"
//                     />
//                     <select
//                       value={item.quantity}
//                       onChange={(e) =>
//                         handleQuantityChange(item.id, Number(e.target.value))
//                       }
//                       className="border rounded-md p-1 text-gray-700"
//                     >
//                       {Array.from(
//                         { length: maxQuantity },
//                         (_, index) => index + 1,
//                       ).map((num) => (
//                         <option key={num} value={num}>
//                           {num}
//                         </option>
//                       ))}
//                     </select>
//                     <span>R$ {(item.price * item.quantity).toFixed(2)}</span>{' '}
//                     <button onClick={() => removeFromCart(item.id)}>
//                       <Trash size={22} color="red" />
//                     </button>
//                   </div>
//                 </div>
//               )
//             })}
//             <div className="flex justify-between font-bold border-b pb-2">
//               <span>Total:</span>
//               <span>R$ {total.toFixed(2)}</span>
//             </div>
//           </div>
//         )}
//         <div className="w-full flex flex-col gap-4">
//           <Link
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
//             href="/carrinho"
//           >
//             Finalizar Compra
//           </Link>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-center"
//           >
//             Continuar Comprando
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartSidebar
