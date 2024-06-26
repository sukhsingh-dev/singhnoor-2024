'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import QtyBtnInput from "@/shared/components/ui/qtyBtnInput"
import { type InCartProductType, type InCartProduct } from "@/shared/helper/types"
import { useShoppingCart } from "@/shared/components/context/CartContext"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import '../cart.sass'

const CartItems = (): React.ReactNode => {
  const { cartProducts, clearCart } = useShoppingCart()
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
    <div className="cart-page-outer">
      {
        cartProducts.length === 0
          ? <NoProductUI />
          :
          <>
            <div className="cart-page-set">
              <div className="cart-page-products">
                {
                  cartProducts.map((productInfo: InCartProductType) => (
                    <CartProductUI key={productInfo.itemKey} product={productInfo} />
                  ))

                }
              </div>
              <button
                type="button"
                className="btn-clear-cart"
                onClick={() => clearCart(CART_STORE_NAME)}
              >
                Clear Cart
                <Icon name="close" width={12} height={12} />
              </button>
            </div>
            <div className="cart-product-order">
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
              <div className="small-note">*Based on Delivery mode you choose on next step Delivery charges will be applied </div>
              <div className="cart-product-order-voucher">
                <h4>Apply Voucher or Code</h4>
                <input type="text" placeholder="Voucher Code" className="sn-input" />
                <button type="button" className="btn btn-primary">Apply</button>
              </div>
              <button type="button" className="btn btn-secondary btn-arrow-long align-center">Login To Checkout</button>
            </div>
          </>
      }

    </div>
  )
}

const NoProductUI = (): React.ReactNode => (
  <div className="no-product">
    <h1>No Product in your Cart</h1>
    <Link href="/shop" className="btn btn-secondary btn-arrow-long align-center">Start Adding Product</Link>
  </div>
)

const CartProductUI = ({ product }: InCartProduct): React.ReactNode => {
  const [qty, setQty] = useState(((product.selected?.qty) != null) ? product.selected.qty : 1)
  const { updateCart, removeProduct } = useShoppingCart()

  return (
    <div className="cart-product">
      <Image
        src={product.productImagesArray[0]}
        alt={product.productTitle}
        width={100}
        height={100}
      />
      <div className="product-select-info">
        <Link className="cart-product-title" href={`/product/${product._id}`}>{product.productTitle}</Link>
        {
          product.productSize.length > 1 ?
            <div className="sn-product-page-attribute size">
              <span className="sn-product-page-attribute-heading">Size:</span>
              <ul className="attribute-sizes-list">
                {
                  // eslint-disable-next-line arrow-body-style
                  product.productSize.map((size) => {
                    return (
                      <li key={size.value}>
                        <input
                          id={`${size.value}-${product.itemKey}`}
                          type="radio"
                          value={size.value}
                          name={`size-radio-${product.itemKey}`}
                          defaultChecked={product.selected?.size === size.value}
                          data-v={product.selected?.size}
                          data-n={size.value}
                          onChange={
                            (e) => updateCart(CART_STORE_NAME, product, "size", e.target.value)
                          }
                        />
                        <label htmlFor={`${size.value}-${product.itemKey}`}>{size.label}</label>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            : null
        }
        {
          product.productColors.length > 1 ?
            <div className="sn-product-page-attribute colors">
              <span className="sn-product-page-attribute-heading">Colors:</span>
              <ul className="attribute-colors-list">
                {
                  product.productColors.map((item) => (
                    <li key={item.value}>
                      <input
                        type="radio"
                        name={`color-radio-${product.itemKey}`}
                        value={item.value}
                        id={`${item.value}-${product.itemKey}`}
                        defaultChecked={product.selected?.color === item.value}
                        onChange={
                          (e) => updateCart(CART_STORE_NAME, product, "color", e.target.value)
                        }
                      />
                      <label
                        htmlFor={`${item.value}-${product.itemKey}`}
                        style={{ backgroundColor: item.value }}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
            : ''
        }
      </div>
      <h3>
        <span className="product-price-currency">₹</span>
        {product.productPrice}
      </h3>
      <QtyBtnInput
        qty={qty}
        setQty={setQty}
        productInfo={product}
        storeName={CART_STORE_NAME}
      />
      <button
        type="button"
        aria-label="remove from cart"
        className="btn-remove-product"
        onClick={() => removeProduct({
          productId: product.itemKey ?? '', actionType: CART_STORE_NAME
        })}
      >
        <Icon name="delete" />
      </button>
    </div>
  )
}

export default CartItems
