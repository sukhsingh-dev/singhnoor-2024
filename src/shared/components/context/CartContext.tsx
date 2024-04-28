'use client'

import React, { createContext, useContext, useState, type ReactNode } from "react"
import { type CartContextType, type InCartProductType } from "@/shared/helper/types"
// import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  addToCart: () => { },
  addToWishList: () => { }
  // getOneProduct: () => undefined,
  // updateOneProduct: () => { },
  // removeProduct: () => { },
  // clearCart: () => { }
})

export function useShoppingCart(): CartContextType {
  return useContext(CartContext)
}

export function CartContextProvider({ children }: { children: ReactNode }): ReactNode {
  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ alertType: '', alertMsg: '' })

  const [cartProducts, setCartProducts] = useState<InCartProductType[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<InCartProductType[]>([])

  const addToCart = (productInfo: InCartProductType): void => {
    setCartProducts((current) => [...current, productInfo])
    setShowAlert(true)
    setAlertInfo({ alertType: 'info', alertMsg: 'Added to Cart' })
    console.log("In Cart is", cartProducts)
  }

  const addToWishList = (productInfo: InCartProductType): void => {
    setWishlistProducts((current) => [...current, productInfo])
    setShowAlert(true)
    setAlertInfo({ alertType: 'info', alertMsg: 'Added to Wishlist' })
    console.log("In Wishlist is", wishlistProducts)
  }

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
        addToCart,
        addToWishList
      }}
    >
      {children}
      {
        showAlert && (
          <Modal
            className="small-modal"
            modalBody={<h4 className="item-heading">{alertInfo.alertMsg}</h4>}
            modalClose={setShowAlert}
            time={3000}
            type={alertInfo.alertType}
          />
        )
      }
    </CartContext.Provider>
  )
}
