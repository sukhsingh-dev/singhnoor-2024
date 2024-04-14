'use client'

import React, { createContext, useEffect, useState, type ReactNode } from "react"
import Modal from "../ui/modal/Modal"

interface Product {
  _id: string
  category: string
  qty?: number
}

interface CartContextType {
  wishlistProducts: Product[]
  cartProducts: Product[]
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
  addProduct: (product: Product) => void
  addToWishList: (product: Product) => void
  // removeProduct: (productId: string) => void
  // clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  setCartProducts: () => { },
  addProduct: () => { },
  addToWishList: () => { }
  // removeProduct: () => { },
  // clearCart: () => { }
})

export function CartContextProvider({ children }: CartContextProviderProps): ReactNode {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const cartStoreName = 'sn-cart'
  const wishlistStoreName = 'sn-wishlist'

  const [alertMsg, setAlertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertTypeAlert] = useState("info")
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])

  const addProduct = (product: Product): void => {
    if (((Boolean(cartProducts.some((item: Product) => item._id === product._id))) ||
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

  const addToWishList = (product: Product): void => {
    if (((Boolean(wishlistProducts.some((item: Product) => item._id === product._id))) ||
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
      const getCartData: Product[] = (cartDataString != null)
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
      const getCartData: Product[] = (cartDataString != null)
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
