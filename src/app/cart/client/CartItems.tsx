'use client'

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import { type CartProductType } from "@/shared/helper/types"
import { CartContext } from "@/shared/components/context/CartContext"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import '../cart.sass'

const CartItems = (): React.ReactNode => {
  const { cartProducts, removeProduct, clearCart } = useContext(CartContext)

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
                  cartProducts.map((product: CartProductType) => (
                    <div key={product._id} className="cart-product">
                      <Image
                        src={product.productImagesArray}
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
                                        <input id={`${size.value}-${product._id}`} type="radio" value={size.label} name="size-radio" />
                                        <label htmlFor={`${size.value}-${product._id}`}>{size.label}</label>
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                            : null
                        }
                      </div>
                      <h3>
                        <span className="product-price-currency">₹</span>
                        {product.productPrice}
                      </h3>
                      <div className="sn-product-page-attribute qty">
                        <div className="attribute-qty">
                          <button type="button" aria-label="increase product quantity by 1">
                            <Icon name="add" width={18} height={18} />
                          </button>
                          <input type="text" defaultValue={1} />
                          <button type="button" aria-label="decrease product quantity by 1">
                            <Icon name="minus" width={18} height={2} />
                          </button>
                        </div>
                      </div>
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
