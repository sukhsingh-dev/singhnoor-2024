'use client'

import React, { createContext, useState, useContext, useEffect } from "react"
import { type CartContextType, type RemoveProductType } from "@/shared/helper/types"
import { useUser } from "@clerk/clerk-react"
import Modal from "../ui/modal/Modal"

export const CartContext = createContext<CartContextType>({
  wishlistProducts: [],
  cartProducts: [],
  removeProduct: () => { },
  clearCart: () => { }
})

export function CartContextProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const { user, isLoaded, isSignedIn } = useUser()
  const [alertMsg] = useState("Added to Cart")
  const [showAlert, setShowAlert] = useState(false)

  const [openClearCartConfirm, setOpenClearCartConfirm] = useState(false)
  // const [clearCartAction, setClearCartAction] = useState('')

  const [alertType] = useState("info")
  const [cartProducts, setCartProducts] = useState([])
  const [wishlistProducts, setWishlistProducts] = useState([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!isLoaded || !isSignedIn || !user?.id) return // wait until user is available

    const fetchCarousel = async (): Promise<void> => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKOFFICE_URL}/cartandwishlist/${user?.id}`)
        const data = await res.json()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCartProducts(data.cartAndWishlist.cartItems)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setWishlistProducts(data.cartAndWishlist.wishlistItems)
      } catch (error) {
        setCartProducts([])
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCarousel()
    console.log(cartProducts)
  }, [isLoaded, isSignedIn, user?.id])

  const removeProduct = ({ productId, actionType }: RemoveProductType): void => {
    // new Logic here
  }
  const clearCart = (actionType: string): void => {
    // new Logic here
  }

  const handleClear = (): void => {
    // new Logic here
  }

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartProducts,
        wishlistProducts,
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
                  Are you really clear your list ?
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
