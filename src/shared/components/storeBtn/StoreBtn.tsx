'use client'

import { useState, useEffect } from "react"
import Icon from "../Icon"
import Modal from "../ui/modal/Modal"

interface ProductTypes {
  _id: string
  category: string
  qty?: number
}

interface StoreBtnTypes {
  productInfo: ProductTypes
  storeName: string
  btnClasses: string
}

const StoreBtn = ({ productInfo, storeName, btnClasses }: StoreBtnTypes): React.ReactNode => {
  const ls = typeof window !== "undefined" ? window.localStorage : null
  const [showAlert, setShowAlert] = useState(false)
  const [cartProducts, setCartProducts] = useState<ProductTypes[]>([])
  const [alertMsg, setAlertMsg] = useState(storeName === "sn-cart" ? "Added to Cart" : "Added to Wishlist")

  const storeItem = (): void => {
    const cartDataString = ls?.getItem(storeName)
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
      ls?.setItem(storeName, JSON.stringify(cartProducts))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts])

  useEffect(() => {
    const cartDataString = ls?.getItem(storeName)
    if ((ls?.getItem(storeName)) !== null) {
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
        className={btnClasses}
        onClick={() => storeItem()}
      >
        <span>{storeName === 'sn-cart' ? 'Add to Cart' : 'Add to Wishlist'}</span>
        <Icon name={storeName === 'sn-cart' ? 'cart' : 'heart'} />
      </button>
      {
        showAlert && (
          <Modal
            className="small-modal"
            modalBody={<h4 className="item-heading">{alertMsg}</h4>}
            modalClose={setShowAlert}
            time={3000}
          />
        )
      }
    </>
  )
}

export default StoreBtn
