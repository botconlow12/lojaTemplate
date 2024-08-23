// // src/context/CartContext.tsx
// import React, { createContext, useState, useEffect, ReactNode } from 'react'
// import Cookie from 'js-cookie'
// import productData from '../pages/products/products.json' // Ajuste o caminho conforme necessário

// interface CartItem {
//   id: number
//   title: string
//   price: number
//   quantity: number
//   image: string
// }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (item: CartItem) => void
//   removeFromCart: (id: number) => void
//   updateQuantity: (id: number, quantity: number) => void
//   productQuantities: { [key: number]: number }
//   setProductQuantities: React.Dispatch<
//     React.SetStateAction<{ [key: number]: number }>
//   >
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [cart, setCart] = useState<CartItem[]>([])
//   const [productQuantities, setProductQuantities] = useState<{
//     [key: number]: number
//   }>({})

//   useEffect(() => {
//     // Inicializa as quantidades dos produtos a partir do arquivo product.json
//     const initializeProductQuantities = () => {
//       const products = productData.products
//       const quantities = products.reduce(
//         (acc, product) => {
//           acc[product.id] = product.stock
//           return acc
//         },
//         {} as { [key: number]: number },
//       )
//       setProductQuantities(quantities)
//     }

//     initializeProductQuantities()
//   }, [])

//   useEffect(() => {
//     const savedCart = Cookie.get('cart')
//     console.log(savedCart)
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart))
//       } catch (error) {
//         console.error('Failed to parse cart from cookies:', error)
//         Cookie.remove('cart') // Remove corrupt data
//       }
//     }
//   }, [])

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       Cookie.set('cart', JSON.stringify([...cart, item]), { expires: 7 }) // Expires in 7 days
//       console.log(cart)
//       const existingItem = prevCart.find((i) => i.id === item.id)
//       if (existingItem) {
//         const newQuantity = Math.min(
//           existingItem.quantity + item.quantity,
//           productQuantities[item.id],
//         )
//         return prevCart.map((i) =>
//           i.id === item.id ? { ...i, quantity: newQuantity } : i,
//         )
//       }
//       return [
//         ...prevCart,
//         {
//           ...item,
//           quantity: Math.min(item.quantity, productQuantities[item.id]),
//         },
//       ]
//     })
//   }

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
//     Cookie.set('cart', JSON.stringify(cart.filter((item) => item.id !== id)), {
//       expires: 7,
//     }) // Expires in 7 days
//   }

//   const updateQuantity = (id: number, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: Math.min(quantity, productQuantities[item.id]),
//             }
//           : item,
//       ),
//     )
//     Cookie.set(
//       'cart',
//       JSON.stringify(
//         cart.map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity: Math.min(quantity, productQuantities[item.id]),
//               }
//             : item,
//         ),
//       ),
//       { expires: 7 },
//     ) // Expires in 7 days
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         productQuantities,
//         setProductQuantities,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = React.useContext(CartContext)
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider')
//   }
//   return context
// }
