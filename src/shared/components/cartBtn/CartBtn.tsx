'use client'

import { useState, useEffect } from "react"
import Icon from "../Icon"
import Modal from "../ui/modal/Modal"

interface CartBtnTypes {
  id: string
  qty?: number
}

const CartBtn = ({ id, qty = 1 }: CartBtnTypes): React.ReactNode => {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const [showAlert, setShowAlert] = useState(false)
  const [cartProducts, setCartProducts] = useState<string[]>([])

  const addToCart = (itemId: string): void => {
    setShowAlert(true)
    const cartDataString = ls?.getItem('sn-cart')
    const oldCart = (cartDataString != null) ? JSON.parse(cartDataString) : null

    if (oldCart === null) {
      setCartProducts([itemId])
    } else if (Array.isArray(oldCart)) {
      setCartProducts([...oldCart, itemId])
    } else {
      setCartProducts([oldCart, itemId])
    }
  }

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('sn-cart', JSON.stringify(cartProducts))
    }
  }, [cartProducts, ls])

  useEffect(() => {
    const cartDataString = ls?.getItem('sn-cart')
    if ((ls?.getItem('sn-cart')) !== null) {
      const getCartData = (cartDataString != null) ? JSON.parse(cartDataString) : null
      if (getCartData !== null) {
        setCartProducts([getCartData])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <button
        type="button"
        className="btn-product btn-add"
        onClick={() => addToCart(id)}
      >
        <span>Add to Cart</span>
        <Icon name="cart" />
      </button>
      {
        showAlert && (
          <Modal
            className="small-modal"
            modalBody={<h4 className="item-heading">Added to Cart</h4>}
            modalClose={setShowAlert}
            time={4500}
          />
        )
      }
    </>
  )
}

export default CartBtn
