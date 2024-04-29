/* eslint-disable no-console */

'use client'

import { type CartContextType, type InCartProductType } from "@/shared/helper/types"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import React, { createContext, useContext, useState, type ReactNode } from "react"
import useLocalStorage from "@/shared/hooks/useLocalStorage"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  addToCart: () => { },
  addToWishList: () => { },
  updateProduct: () => { },
  removeProduct: () => { },
  clearCart: () => { }
})

export function useShoppingCart(): CartContextType {
  return useContext(CartContext)
}

export function CartContextProvider({ children }: { children: ReactNode }): ReactNode {
  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ alertType: '', alertMsg: '' })

  const [cartProducts, setCartProducts] = useLocalStorage<InCartProductType[]>(CART_STORE_NAME, [])
  const [wishlistProducts, setWishlistProducts] =
    useLocalStorage<InCartProductType[]>(WISHLIST_STORE_NAME, [])

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

  const removeProduct = (productIndex: number, storeName: string): void => {
    if (storeName === CART_STORE_NAME) {
      const productsList = cartProducts
      productsList.splice(productIndex, 1)
      setCartProducts(productsList)
    } else {
      const productsList = cartProducts
      productsList.splice(productIndex, 1)
      setWishlistProducts(productsList)
    }
    setShowAlert(true)
    setAlertInfo({ alertType: 'info', alertMsg: 'Product Removed' })
  }

  const updateProduct = (
    productId: string,
    storeName: string,
    keyName: string,
    keyValue: string | number
  ): void => {
    // if (storeName === CART_STORE_NAME) {
    //   const updatingProduct =
    // cartProducts.find((item: InCartProductType) => item._id === productId)
    //   const currentProducts = cartProducts.filter((item) => item._id !== productId)
    //   console.log("This got", updatingProduct, currentProducts)
    //   if (updatingProduct !== undefined && currentProducts !== undefined) {
    //     const newChanges: InCartProductType = {
    //       ...updatingProduct,
    //       selected: {
    //         ...updatingProduct?.selected,
    //         [keyName]: keyValue
    //       }
    //     }
    //     setCartProducts([...currentProducts, newChanges])
    //   }
    // } else {
    //   wishlistProducts.find((item: InCartProductType) => item._id === productId)
    // }
  }

  const clearCart = (storeName: string): void => {
    if (storeName === CART_STORE_NAME) {
      setCartProducts([])
    } else {
      setWishlistProducts([])
    }
  }

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
        addToCart,
        addToWishList,
        removeProduct,
        updateProduct,
        clearCart
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
