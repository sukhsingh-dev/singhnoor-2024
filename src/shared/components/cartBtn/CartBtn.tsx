'use client'

import { useState } from "react"
import Icon from "../Icon"
import Modal from "../ui/modal/Modal"

interface CartBtnTypes {
  id: string
  qty?: number
}

const CartBtn = ({ id, qty = 1 }: CartBtnTypes): React.ReactNode => {
  const [showAlert, setShowAlert] = useState(false)

  const addToCart = (itemId: string): void => {
    setShowAlert(true)
  }

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
