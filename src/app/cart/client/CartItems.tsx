'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import QtyBtnInput from "@/shared/components/ui/qtyBtnInput"
import { type ProductType, type InCartProductType } from "@/shared/helper/types"
import { useShoppingCart } from "@/shared/components/context/CartContext"
// import { CART_STORE_NAME } from "@/shared/helper/constants"
import '../cart.sass'
import { CART_STORE_NAME } from "@/shared/helper/constants"

const CartItems = (): React.ReactNode => {
  const [cartItems, setCartItems] = useState<InCartProductType[]>()
  const { cartProducts } = useShoppingCart()

  useEffect(() => {
    setCartItems(cartProducts)
  })

  // const sortedCartProducts = cartProducts.sort((a, b) => {
  //   if (a._id < b._id) {
  //     return -1
  //   }
  //   if (a._id > b._id) {
  //     return 1
  //   }
  //   return 0
  // })

  return (
    <div className="cart-page-outer">
      {
        cartItems?.length === 0
          ? <NoProductUI />
          :
          <>
            <div className="cart-page-set">
              <div className="cart-page-products">
                {
                  cartItems?.map((productInfo: InCartProductType) => (
                    <CartProductUI
                      key={productInfo._id}
                      _id={productInfo._id}
                      selected={productInfo.selected}
                    />
                  ))

                }
              </div>
              <button
                type="button"
                className="btn-clear-cart"
              // onClick={() => clearCart(CART_STORE_NAME)}
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
                    {/* {`${subtotal}.00`} */}
                  </span>
                </div>

                <div className="order-info">
                  <span className="order-info-title">GST</span>
                  <span className="order-info-total">
                    <span className="product-price-currency">₹</span>
                    {/* {getGSTPrice()} */}
                  </span>
                </div>

                <div className="order-info discount">
                  <span className="order-info-title">Discount</span>
                  <span className="order-info-total">
                    <span className="product-price-currency">₹</span>
                    {/* {discount} */}
                  </span>
                </div>

                <div className="order-info grand-total">
                  <span className="order-info-title">Grand Total</span>
                  <span className="order-info-total">
                    <span className="product-price-currency">₹</span>
                    {/* {getGrandTotal()} */}
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

const CartProductUI = ({ _id, selected }: InCartProductType): React.ReactNode => {
  const [qty, setQty] = useState(selected?.qty === undefined ? 1 : selected?.qty)
  const [product, setProduct] = useState<ProductType>()

  const { removeProduct } = useShoppingCart()

  useEffect(() => {
    fetch(`http://localhost:3000/api/products?id=${_id}`)
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((res) => res.json())
      .then((data: ProductType) => {
        setProduct(data)
      })
      .catch((err: string) => { throw new Error(err) })
  }, [])

  if (product === undefined) {
    return "Loading..."
  }

  return (
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
                          value={size.value}
                          name={`size-radio-${product._id}`}
                        // defaultChecked={product.selected?.size === size.value}
                        // onChange={
                        //   (e) => handleSizeChange(e.target.value)
                        // }
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
                      // defaultChecked={product.selected?.color === item.value}
                      // onChange={
                      //   (e) => handleColorChange(e.target.value)
                      // }
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
      <QtyBtnInput qty={qty} setQty={setQty} />
      <button
        type="button"
        aria-label="remove from cart"
        className="btn-remove-product"
        onClick={() => removeProduct({ productId: product._id, storeName: CART_STORE_NAME })}
      >
        <Icon name="delete" />
      </button>
    </div>
  )
}

export default CartItems
