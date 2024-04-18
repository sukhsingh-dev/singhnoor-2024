'use client'

import { CartContext } from "@/shared/components/context/CartContext"
import { useContext } from "react"
// import { type ProductType } from "@/shared/helper/types"
// import Image from "next/image"

const CartItems = (): React.ReactNode => {
  const { cartProducts } = useContext(CartContext)

  return (
    <div className="cart-page-outer">
      <div className="cart-page-products">
        {
          cartProducts.length === 0
            ? 'No Product Added'
            : cartProducts.map((product: any) => (
              <div key={product._id} className="cart-product">
                <h1>{product._id}</h1>
              </div>
            ))
        }
      </div>

    </div>
  )
}

// const CartItemsList = (products: ProductType[] | Response): React.ReactNode => {
//   // eslint-disable-next-line no-console
//   console.log("The data is", products)

//   return (
//     <>
//       <div className="cart-page-products">
//         {
//           products.length > 0 && products.map((product: ProductType) => (
//             <div className="cart-product" key={product._id}>
//               <Image
//                 src={product.productImagesArray[0]}
//                 alt={product.productTitle}
//                 width={120}
//                 height={120}
//                 quality={100}
//               />
//             </div>
//           ))
//         }
//       </div>
//       <div className="cart-page-checkout">
//         Checkout area
//       </div>
//     </>
//   )
// }
export default CartItems
