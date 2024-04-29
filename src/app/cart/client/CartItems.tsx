'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import QtyBtnInput from "@/shared/components/ui/qtyBtnInput"
import { type ProductType, type InCartProductType } from "@/shared/helper/types"
import { useShoppingCart } from "@/shared/components/context/CartContext"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import '../cart.sass'

const CartItems = (): React.ReactNode => {
  const [cartItems, setCartItems] = useState<InCartProductType[]>()
  const { cartProducts, clearCart } = useShoppingCart()

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
                  cartItems?.map((productInfo: InCartProductType, index: number) => (
                    <CartProductUI
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${productInfo._id}-${index}`}
                      _id={productInfo._id}
                      selected={productInfo.selected}
                      index={index}
                    />
                  ))

                }
              </div>
              {
                (cartItems != null) && cartItems?.length > 1 &&
                <button
                  type="button"
                  className="btn-clear-cart"
                  onClick={() => clearCart(CART_STORE_NAME)}
                >
                  Clear Cart
                  <Icon name="close" width={12} height={12} />
                </button>
              }
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

const CartProductUI = ({ _id, selected, index }: InCartProductType): React.ReactNode => {
  const [qty, setQty] = useState(selected?.qty === undefined ? 1 : selected?.qty)
  const [selectedSize] = useState(selected?.size)
  const [selectedColor] = useState(selected?.color)
  const [product, setProduct] = useState<ProductType>()

  const { updateProduct, removeProduct } = useShoppingCart()

  const handleAttributeChange = (keyValue: string | number, keyName: string): void => {
    updateProduct(_id, CART_STORE_NAME, keyName, keyValue)
  }

  useEffect(() => {
    updateProduct(_id, CART_STORE_NAME, "qty", qty)
  }, [qty])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKOFFICE_URL}/products?id=${_id}`)
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
    <div key={`${product._id}-${index}`} className="cart-product">
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
                  product.productSize.map((size) => {
                    const uniqueValue = `${size.value}-${product._id}-${index}`
                    return (
                      <li key={uniqueValue}>
                        <input
                          type="radio"
                          id={uniqueValue}
                          name={`size-radio-${product._id}-${index}`}
                          value={size.value}
                          defaultChecked={selectedSize === size.value}
                          onChange={
                            (e) => handleAttributeChange(e.target.value, "size")
                          }
                        />
                        <label htmlFor={uniqueValue}>{size.label}</label>
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
                  product.productColors.map((item) => {
                    const uniqueValue = `${item.value}-${product._id}-${index}`
                    return (
                      <li key={uniqueValue}>
                        <input
                          type="radio"
                          name={`color-radio-${product._id}-${index}`}
                          value={item.value}
                          id={uniqueValue}
                          defaultChecked={selectedColor === item.value}
                          onChange={
                            (e) => handleAttributeChange(e.target.value, "color")
                          }
                        />
                        <label
                          htmlFor={uniqueValue}
                          style={{ backgroundColor: item.value }}
                        />
                      </li>
                    )
                  })
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
        onClick={() => removeProduct(index, CART_STORE_NAME)}
      >
        <Icon name="delete" />
      </button>
    </div>
  )
}

export default CartItems
