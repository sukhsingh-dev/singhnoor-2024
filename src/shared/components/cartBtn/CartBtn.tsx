'use client'

import { useState, useEffect } from "react"
import Icon from "../Icon"
import Modal from "../ui/modal/Modal"

interface ProductTypes {
  _id: string
  category: string
  qty?: number
}

interface CartBtnTypes {
  productInfo: ProductTypes
}

const CartBtn = ({ productInfo }: CartBtnTypes): React.ReactNode => {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const [showAlert, setShowAlert] = useState(false)
  const [cartProducts, setCartProducts] = useState<ProductTypes[]>([])
  const [alertMsg, setAlertMsg] = useState("Added to Cart")

  const addToCart = (): void => {
    const cartDataString = ls?.getItem('sn-cart')
    const oldCart = (cartDataString != null) ? JSON.parse(cartDataString) : null

    if (oldCart !== null &&
      ((Boolean(oldCart.some((item: ProductTypes) => item._id === productInfo._id))) ||
        cartProducts.some((item) => item._id === productInfo._id))) {
      setAlertMsg("Already added")
      setShowAlert(true)
      return
    }

    if (oldCart === null) {
      setCartProducts([productInfo])
    } else if (Array.isArray(oldCart)) {
      setCartProducts([...oldCart, productInfo])
    } else {
      setCartProducts([oldCart, productInfo])
    }
    setShowAlert(true)
  }

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('sn-cart', JSON.stringify(cartProducts))
    }
  }, [cartProducts, ls])

  useEffect(() => {
    const cartDataString = ls?.getItem('sn-cart')
    if ((ls?.getItem('sn-cart')) !== null) {
      const getCartData: ProductTypes[] = (cartDataString != null)
        ? JSON.parse(cartDataString)
        : null
      if (getCartData !== null) {
        setCartProducts(getCartData)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <button
        type="button"
        className="btn-product btn-add"
        onClick={() => addToCart()}
      >
        <span>Add to Cart</span>
        <Icon name="cart" />
      </button>
      {
        showAlert && (
          <Modal
            className="small-modal"
            modalBody={<h4 className="item-heading">{alertMsg}</h4>}
            modalClose={setShowAlert}
            time={4500}
          />
        )
      }
    </>
  )
}

export default CartBtn
