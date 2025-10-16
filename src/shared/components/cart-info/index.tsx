'use client'

import { type InCartProductType } from "@/shared/helper/types"
import { useShoppingCart } from "../context/CartContext"

export default function CartInfo(): React.ReactNode {
  const { cartProducts } = useShoppingCart()
  const subtotal = cartProducts.reduce((acc, product: InCartProductType) => {
    const productSubtotal = product.productPrice * (
      product.selected?.qty !== undefined ? product.selected.qty : 1
    )
    return acc + productSubtotal
  }, 0)

  const getGSTPrice = (): number => {
    let gstVal = 1

    if (subtotal < 1000) {
      gstVal = 0.05
    } else {
      gstVal = 0.12
    }
    const priceGST = subtotal * gstVal
    return Number(priceGST.toFixed(2))
  }

  const discount = 0
  const getGrandTotal = (): number => {
    const sum = subtotal + getGSTPrice() - discount
    return Number(sum.toFixed(2))
  }
  return (
    <div className="cart-product-order-summary">
      <h4>Order Summary</h4>

      <div className="order-info">
        <span className="order-info-title">Subtotal</span>
        <span className="order-info-total">
          <span className="product-price-currency">₹</span>
          {`${subtotal}.00`}
        </span>
      </div>

      <div className="order-info">
        <span className="order-info-title">GST</span>
        <span className="order-info-total">
          <span className="product-price-currency">₹</span>
          {getGSTPrice()}
        </span>
      </div>

      <div className="order-info discount">
        <span className="order-info-title">Discount</span>
        <span className="order-info-total">
          <span className="product-price-currency">₹</span>
          {discount}
        </span>
      </div>

      <div className="order-info grand-total">
        <span className="order-info-title">Grand Total</span>
        <span className="order-info-total">
          <span className="product-price-currency">₹</span>
          {getGrandTotal()}
        </span>
      </div>
    </div>
  )
}
