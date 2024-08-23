// import { useCart } from '@/context/CartContext'
// import Head from 'next/head'
// import { Header } from '@/components/header'
// import Footer from '@/components/footer'
// import Image from 'next/image'
// import { Trash } from 'phosphor-react'

// import axios from 'axios'

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity, productQuantities } = useCart()

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

//   const handleQuantityChange = (itemId: number, quantity: number) => {
//     updateQuantity(itemId, quantity)
//   }

//   const handleCheckout = async () => {
//     try {
//       // Prepare the order data based on your cart
//       const orderData = {
//         items: cart.map((item) => ({
//           id: item.id,
//           quantity: item.quantity,
//           price: item.price,
//         })),
//         total,
//       }

//       // Make a request to your server to create an order and get the Vega Checkout URL
//       const response = await axios.post('/api/create-order', orderData)

//       if (response.data && response.data.checkoutUrl) {
//         window.location.href = response.data.checkoutUrl
//       } else {
//         console.error('Failed to get checkout URL')
//       }
//     } catch (error) {
//       console.error('Error during checkout process:', error)
//     }
//   }

//   return (
//     <>
//       <Head>
//         <title>Carrinho de Compras</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/logo.svg" />
//       </Head>
//       <Header />
//       <main className="w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto gap-4 pt-4 bg-white">
//         <h1 className="text-2xl font-bold underline">Seu Carrinho</h1>
//         <div className="flex flex-col gap-4 p-4">
//           {cart.length === 0 ? (
//             <p>Seu carrinho está vazio.</p>
//           ) : (
//             <div className="w-full flex flex-col gap-6">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col items-start gap-4 text-left"
//                 >
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={64}
//                       height={64}
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
//                         { length: Math.min(productQuantities[item.id], 10) },
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
//               ))}
//               <div className="flex justify-between font-bold border-b pb-2">
//                 <span>Total:</span>
//                 <span>R$ {total.toFixed(2)}</span>
//               </div>
//             </div>
//           )}
//           <div className="w-full flex flex-col gap-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
//               onClick={handleCheckout}
//             >
//               Finalizar Compra
//             </button>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default CartPage
