'use client'

import React, { createContext, useEffect, useState, type ReactNode } from "react"
import { type CartContextType, type ProductType, type RemoveProductType } from "@/shared/helper/types"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
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
  const cartStoreName = CART_STORE_NAME
  const wishlistStoreName = WISHLIST_STORE_NAME

  const [alertMsg, setAlertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)

  const [openClearCartConfirm, setOpenClearCartConfirm] = useState(false)
  const [clearCartAction, setClearCartAction] = useState('')

  const [alertType, setAlertTypeAlert] = useState("info")
  const [cartProducts, setCartProducts] = useState<ProductType[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<ProductType[]>([])

  const addProduct = (product: ProductType): void => {
    if (((Boolean(cartProducts.some((item: ProductType) => item._id === product._id))) ||
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

  const addToWishList = (product: ProductType): void => {
    if (((Boolean(wishlistProducts.some((item: ProductType) => item._id === product._id))) ||
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
    if (actionType === CART_STORE_NAME) {
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

    if (clearCartAction === CART_STORE_NAME) {
      setCartProducts([])
      ls?.setItem(CART_STORE_NAME, JSON.stringify([]))
      setAlertMsg("Cart Cleared")
    }
    if (clearCartAction === WISHLIST_STORE_NAME) {
      setWishlistProducts([])
      ls?.setItem(WISHLIST_STORE_NAME, JSON.stringify([]))
      setAlertMsg("Wishlist Cleared")
    }
    setClearCartAction('')
  }

  useEffect(() => {
    const cartDataString = ls?.getItem(cartStoreName)
    if ((ls?.getItem(cartStoreName)) !== null) {
      const getCartData: ProductType[] = (cartDataString != null)
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
      const getCartData: ProductType[] = (cartDataString != null)
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
              <div className="clear-cart-modal-body">
                <h3>
                  Are you really want to
                  <br />
                  clear your&nbsp;
                  {clearCartAction === CART_STORE_NAME ? "Cart" : "Wishlist"}
                </h3>
              </div>
            }
            modalFooter={
              <>
                <button type="button" onClick={handleClear} className="btn btn-danger">Confirm</button>
                <button type="button" onClick={() => setOpenClearCartConfirm(false)} className="btn btn-light">Cancel</button>
              </>
            }
            modalClose={setOpenClearCartConfirm}
          />
        )
      }
    </CartContext.Provider>
  )
}
