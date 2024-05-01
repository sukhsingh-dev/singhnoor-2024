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
    const checkAvailable = cartProducts.find((item) => (
      item._id === productInfo._id &&
      item.selected?.size === productInfo.selected?.size &&
      item.selected?.color === productInfo.selected?.color &&
      item.selected?.material === productInfo.selected?.material &&
      item.selected?.work === productInfo.selected?.work))

    if (checkAvailable?.selected?.qty !== undefined) {
      updateProduct(checkAvailable.uniqueKey, CART_STORE_NAME, "qty", (checkAvailable.selected.qty + 1))
      setShowAlert(true)
      setAlertInfo({ alertType: 'info', alertMsg: 'Quantity Updated' })
    } else {
      setCartProducts((current) => [...current, productInfo])
      setShowAlert(true)
      setAlertInfo({ alertType: 'info', alertMsg: 'Added to Cart' })
    }
  }

  const addToWishList = (productInfo: InCartProductType): void => {
    setWishlistProducts((current) => [...current, productInfo])
    setShowAlert(true)
    setAlertInfo({ alertType: 'info', alertMsg: 'Added to Wishlist' })
  }

  const removeProduct = (uniqueKey: string, storeName: string): void => {
    if (storeName === CART_STORE_NAME) {
      setCartProducts((prevItems) => {
        return prevItems.filter((item) => item.uniqueKey !== uniqueKey)
      })
    } else {
      setWishlistProducts((prevItems) => {
        return prevItems.filter((item) => item.uniqueKey !== uniqueKey)
      })
    }
    setShowAlert(true)
    setAlertInfo({ alertType: 'info', alertMsg: 'Product Removed' })
  }

  const updateProduct = (
    uniqueKey: string,
    storeName: string,
    keyName: string,
    keyValue: string | number
  ): void => {
    if (storeName === CART_STORE_NAME) {
      const updatingProduct = cartProducts.find((item) => item.uniqueKey === uniqueKey)
      if (updatingProduct?._id !== undefined) {
        const newChanges: InCartProductType = {
          ...updatingProduct,
          selected: {
            ...updatingProduct?.selected,
            [keyName]: keyValue
          }
        }
        const productList = cartProducts.filter((item) => item.uniqueKey !== uniqueKey)
        setCartProducts([...productList, newChanges])
      }

    }
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
