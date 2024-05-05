/* eslint-disable import/no-extraneous-dependencies */

'use client'

import React, { createContext, useEffect, useState, useContext } from "react"
import Localbase from 'localbase'
import { type CartContextType, type ProductType, type RemoveProductType, type InCartProductType } from "@/shared/helper/types"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  addToCart: () => { },
  addToWishList: () => { },
  updateCart: () => { },
  removeProduct: () => { },
  clearCart: () => { }
})

export function CartContextProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const db = new Localbase('db')
  db.config.debug = false

  const [alertMsg, setAlertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)

  const [openClearCartConfirm, setOpenClearCartConfirm] = useState(false)
  const [clearCartAction, setClearCartAction] = useState('')

  const [alertType, setAlertTypeAlert] = useState("info")
  const [cartProducts, setCartProducts] = useState<InCartProductType[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<InCartProductType[]>([])

  const refreshCartState = (): void => {
    db.collection(CART_STORE_NAME).get({ keys: true }).then((product: ProductType[]) => {
      const cartData: InCartProductType[] = []
      if (Array.isArray(product)) {
        // eslint-disable-next-line array-callback-return
        product.map((item: any) => {
          const itemKey: string = item.key
          const newData: ProductType = item.data
          const newItem: InCartProductType = { itemKey, ...newData }
          cartData.push(newItem)
        })
        setCartProducts(cartData)
      }
    })
  }

  const updateCart = (
    storeName: string,
    productInfo: InCartProductType,
    keyName: string,
    keyValue: string | number
  ): void => {
    db.collection(storeName).doc(productInfo.itemKey).update({
      selected: {
        ...productInfo.selected,
        [keyName]: keyValue
      }
    }).then((_res: any) => {
      refreshCartState()
    })
  }

  const addToCart = (productInfo: InCartProductType): void => {
    const checkAvailable = cartProducts.find((item) => (
      item._id === productInfo._id &&
      item.selected?.size === productInfo.selected?.size &&
      item.selected?.color === productInfo.selected?.color &&
      item.selected?.material === productInfo.selected?.material &&
      item.selected?.work === productInfo.selected?.work))

    if (checkAvailable?.selected?.qty !== undefined) {
      updateCart(CART_STORE_NAME, checkAvailable, "qty", (checkAvailable.selected.qty + 1))
      setAlertMsg("Quantity Updated")
      setShowAlert(true)
      return
    }
    db.collection(CART_STORE_NAME).add(productInfo).then((_res: any) => {
      refreshCartState()
    })
    setAlertTypeAlert("info")
    setAlertMsg("Added to Cart")
    setShowAlert(true)
    setCartProducts((prev) => [...prev, productInfo])
  }

  const addToWishList = (productInfo: InCartProductType): void => {
    const checkAvailable = wishlistProducts.find((item) => (
      item._id === productInfo._id &&
      item.selected?.size === productInfo.selected?.size &&
      item.selected?.color === productInfo.selected?.color &&
      item.selected?.material === productInfo.selected?.material &&
      item.selected?.work === productInfo.selected?.work))

    if (checkAvailable?.selected?.qty !== undefined) {
      updateCart(WISHLIST_STORE_NAME, checkAvailable, "qty", (checkAvailable.selected.qty + 1))
      setAlertMsg("Quantity Updated")
      setShowAlert(true)
      return
    }
    db.collection(WISHLIST_STORE_NAME).add(productInfo)
    setAlertTypeAlert("info")
    setAlertMsg("Added to Wishlist")
    setShowAlert(true)
    setWishlistProducts((prev) => [...prev, productInfo])
  }

  const removeProduct = ({ productId, actionType }: RemoveProductType): void => {
    if (actionType === CART_STORE_NAME) {
      db.collection(CART_STORE_NAME).doc(productId).delete().then((_res: any) => {
        refreshCartState()
      })
      const updatedCart = cartProducts.filter((item) => item._id !== productId)
      setCartProducts(updatedCart)
      setAlertMsg("Removed from Cart")
    } else {
      db.collection(WISHLIST_STORE_NAME).doc(productId).delete()
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
      db.collection(CART_STORE_NAME).delete()
      setCartProducts([])
      setAlertMsg("Cart Cleared")
    }
    if (clearCartAction === WISHLIST_STORE_NAME) {
      db.collection(WISHLIST_STORE_NAME).delete()
      setWishlistProducts([])
      setAlertMsg("Wishlist Cleared")
    }
    setClearCartAction('')
  }

  useEffect(() => {
    refreshCartState()
  }, [])

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
        addToCart,
        addToWishList,
        updateCart,
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

export function useShoppingCart(): CartContextType {
  return useContext(CartContext)
}
