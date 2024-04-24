'use client'

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
// import QtyBtnInput from "@/shared/components/ui/qtyBtnInput"
import { type InCartProductType } from "@/shared/helper/types"
import { CartContext } from "@/shared/components/context/CartContext"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import '../cart.sass'

const CartItems = (): React.ReactNode => {
  const {
    cartProducts, getOneProduct, updateOneProduct, removeProduct, clearCart
  } = useContext(CartContext)

  const sortedCartProducts = cartProducts.sort((a, b) => {
    if (a._id < b._id) {
      return -1
    }
    if (a._id > b._id) {
      return 1
    }
    return 0
  })

  const handleSizeChange = (sizeValue: string, id: string): void => {
    const currentProduct = getOneProduct(id)
    if (currentProduct !== undefined) {
      const newChanges: InCartProductType = {
        ...currentProduct,
        selected: {
          ...currentProduct.selected,
          size: sizeValue
        }
      }
      updateOneProduct(newChanges)
    }
  }

  const handleColorChange = (colorValue: string, id: string): void => {
    const currentProduct = getOneProduct(id)
    if (currentProduct !== undefined) {
      const newChanges: InCartProductType = {
        ...currentProduct,
        selected: {
          ...currentProduct.selected,
          color: colorValue
        }
      }
      updateOneProduct(newChanges)
    }
  }

  return (
    <div className="cart-page-outer">
      {
        sortedCartProducts.length === 0
          ? <NoProductUI />
          :
          <>
            <div className="cart-page-set">
              <div className="cart-page-products">
                {
                  sortedCartProducts.map((product: InCartProductType) => (
                    <div key={product._id} className="cart-product">
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
                                          id={`${size.value}-${product._id}`}
                                          type="radio"
                                          value={size.label}
                                          name={`size-radio-${product._id}`}
                                          defaultChecked={product.selected?.size === size.label}
                                          onChange={
                                            (e) => handleSizeChange(e.target.value, product._id)
                                          }
                                        />
                                        <label htmlFor={`${size.value}-${product._id}`}>{size.label}</label>
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
                                        name={`color-radio-${product._id}`}
                                        value={item.value}
                                        id={item.value}
                                        defaultChecked={product.selected?.color === item.value}
                                        onChange={
                                          (e) => handleColorChange(e.target.value, product._id)
                                        }
                                      />
                                      <label
                                        htmlFor={item.value}
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
                      {/* <QtyBtnInput /> */}
                      <button
                        type="button"
                        aria-label="remove from cart"
                        className="btn-remove-product"
                        onClick={() => removeProduct({
                          productId: product._id, actionType: CART_STORE_NAME
                        })}
                      >
                        <Icon name="delete" />
                      </button>
                    </div>
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
                    500
                  </span>
                </div>

                <div className="order-info discount">
                  <span className="order-info-title">Discount</span>
                  <span className="order-info-total">
                    -
                    <span className="product-price-currency">₹</span>
                    100
                  </span>
                </div>

                <div className="order-info">
                  <span className="order-info-title">GST</span>
                  <span className="order-info-total">
                    -
                    <span className="product-price-currency">₹</span>
                    20
                  </span>
                </div>

                <div className="order-info grand-total">
                  <span className="order-info-title">Grand Total</span>
                  <span className="order-info-total">
                    -
                    <span className="product-price-currency">₹</span>
                    520
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

export default CartItems
