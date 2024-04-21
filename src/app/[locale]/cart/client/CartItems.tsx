'use client'

import { CartContext } from "@/shared/components/context/CartContext"
import { useContext } from "react"
import { type CartProductType } from "@/shared/helper/types"
import Image from "next/image"
import Icon from "@/shared/components/Icon"
import '../cart.sass'
import Link from "next/link"

const CartItems = (): React.ReactNode => {
  const { cartProducts, removeProduct, clearCart } = useContext(CartContext)

  return (
    <div className="cart-page-outer">
      {
        cartProducts.length === 0
          ? <NoProductUI />
          :
          <>
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
                      <Link className="cart-product-title" href={`/en/product/${product._id}`}>{product.productTitle}</Link>
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
                        <input type="number" defaultValue={1} />
                        <button type="button" aria-label="decrease product quantity by 1">
                          <Icon name="minus" width={18} height={2} />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="remove from cart"
                      className="btn-remove-product"
                      onClick={() => removeProduct({ productId: product._id, actionType: "sn-cart" })}
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
              onClick={() => clearCart("sn-cart")}
            >
              Clear Cart
              <Icon name="close" width={12} height={12} />
            </button>
          </>
      }

    </div>
  )
}

const NoProductUI = (): React.ReactNode => (
  <div className="no-product">
    <h1>No Product in your Cart</h1>
    <Link href="/en/shop" className="btn btn-secondary btn-arrow-long align-center">Start Adding Product</Link>
  </div>
)

export default CartItems
