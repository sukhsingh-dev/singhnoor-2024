'use client'

import { type CartContextType, type CartProductType, type RemoveProductType } from "@/shared/helper/types"
import React, { createContext, useEffect, useState, type ReactNode } from "react"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  setCartProducts: () => { },
  addProduct: () => { },
  addToWishList: () => { },
  removeProduct: () => { },
  clearCart: () => { }
})

export function CartContextProvider({ children }: { children: ReactNode }): ReactNode {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const cartStoreName = 'sn-cart'
  const wishlistStoreName = 'sn-wishlist'

  const [alertMsg, setAlertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)

  const [openClearCartConfirm, setOpenClearCartConfirm] = useState(false)
  const [clearCartAction, setClearCartAction] = useState('')

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

  const removeProduct = ({ productId, actionType }: RemoveProductType): void => {
    if (actionType === 'sn-cart') {
      const updatedCart = cartProducts.filter((item) => item._id !== productId)
      setCartProducts(updatedCart)
      setAlertMsg("Removed from Cart")
    } else {
      const updatedWishlist = wishlistProducts.filter((item) => item._id !== productId)
      setWishlistProducts(updatedWishlist)
      setAlertMsg("Removed from Wishlist")
    }
    setAlertTypeAlert("info")
    setShowAlert(true)
  }

  const clearCart = (actionType: string): void => {
    setOpenClearCartConfirm(true)
    setClearCartAction(actionType)
  }

  const handleClear = (): void => {
    setOpenClearCartConfirm(false)
    setAlertTypeAlert("info")
    setShowAlert(true)

    if (clearCartAction === "sn-cart") {
      setCartProducts([])
      ls?.setItem("sn-cart", JSON.stringify([]))
      setAlertMsg("Cart Cleared")
    }
    if (clearCartAction === "sn-wishlist") {
      setWishlistProducts([])
      ls?.setItem("sn-wishlist", JSON.stringify([]))
      setAlertMsg("Wishlist Cleared")
    }
    setClearCartAction('')
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
  }, [])

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem(cartStoreName, JSON.stringify(cartProducts))
    }
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
  }, [])

  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      ls?.setItem(wishlistStoreName, JSON.stringify(wishlistProducts))
    }
  }, [wishlistProducts])

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
        setCartProducts,
        addProduct,
        addToWishList,
        removeProduct,
        clearCart
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
      {
        openClearCartConfirm && (
          <Modal
            className="clear-cart-modal"
            modalBody={
              <div>
                <h3>
                  Are you really want to clear your
                  {clearCartAction}
                </h3>
              </div>
            }
            modalFooter={
              <>
                <button type="button" onClick={handleClear}>Confirm</button>
                <button type="button" onClick={() => setOpenClearCartConfirm(false)}>Cancel</button>
              </>
            }
            modalClose={setOpenClearCartConfirm}
          />
        )
      }
    </CartContext.Provider>
  )
}
