'use client'

import { type CartContextType, type CartProductType } from "@/shared/helper/types"
import React, { createContext, useEffect, useState, type ReactNode } from "react"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  setCartProducts: () => { },
  addProduct: () => { },
  addToWishList: () => { }
  // removeProduct: () => { },
  // clearCart: () => { }
})

export function CartContextProvider({ children }: { children: ReactNode }): ReactNode {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const cartStoreName = 'sn-cart'
  const wishlistStoreName = 'sn-wishlist'

  const [alertMsg, setAlertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertTypeAlert] = useState("info")
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<CartProductType[]>([])

  const addProduct = (product: CartProductType): void => {
    if (((Boolean(cartProducts.some((item: CartProductType) => item._id === product._id))) ||
      cartProducts.some((item) => item._id === product._id))) {
      setAlertTypeAlert("soft-error")
      setAlertMsg("Already in Cart")
      setShowAlert(true)
      return
    }
    setAlertTypeAlert("info")
    setShowAlert(true)
    setCartProducts((prev) => [...prev, product])
  }

  const addToWishList = (product: CartProductType): void => {
    if (((Boolean(wishlistProducts.some((item: CartProductType) => item._id === product._id))) ||
      wishlistProducts.some((item) => item._id === product._id))) {
      setAlertTypeAlert("soft-error")
      setAlertMsg("Already in Wishlist")
      setShowAlert(true)
      return
    }
    setAlertTypeAlert("info")
    setShowAlert(true)
    setAlertMsg("Added to Wishlist")
    setWishlistProducts((prev) => [...prev, product])
  }

  useEffect(() => {
    const cartDataString = ls?.getItem(cartStoreName)
    if ((ls?.getItem(cartStoreName)) !== null) {
      const getCartData: CartProductType[] = (cartDataString != null)
        ? JSON.parse(cartDataString)
        : null
      if (getCartData !== null) {
        setCartProducts(getCartData)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem(cartStoreName, JSON.stringify(cartProducts))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts])

  useEffect(() => {
    const cartDataString = ls?.getItem(wishlistStoreName)
    if ((ls?.getItem(wishlistStoreName)) !== null) {
      const getCartData: CartProductType[] = (cartDataString != null)
        ? JSON.parse(cartDataString)
        : null
      if (getCartData !== null) {
        setWishlistProducts(getCartData)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      ls?.setItem(wishlistStoreName, JSON.stringify(wishlistProducts))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistProducts])

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
        setCartProducts,
        addProduct,
        addToWishList
      }}
    >
      {children}
      {
        showAlert && (
          <Modal
            className="small-modal"
            modalBody={<h4 className="item-heading">{alertMsg}</h4>}
            modalClose={setShowAlert}
            time={3000}
            type={alertType}
          />
        )
      }
    </CartContext.Provider>
  )
}
