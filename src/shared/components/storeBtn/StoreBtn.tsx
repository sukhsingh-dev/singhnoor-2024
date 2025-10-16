'use client'

import { type StoreBtnTypes } from "@/shared/helper/types"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import Link from "next/link"
import { useShoppingCart } from "../context/CartContext"
import Icon from "../Icon"

const StoreBtn = ({
  productInfo, storeName, btnClasses, selected
}: StoreBtnTypes): React.ReactNode => {
  const { cartProducts, wishlistProducts, addToCart, addToWishList } = useShoppingCart()

  const handleAddToCart = (): void => {
    const productData = { ...productInfo, selected }
    if (storeName === CART_STORE_NAME) {
      addToCart(productData)
    } else {
      addToWishList(productInfo)
    }
  }

  const isInCart = cartProducts.find((product) => product._id === productInfo._id) != null
  const isInWishlist = wishlistProducts.find((product) => product._id === productInfo._id) != null

  return (
    isInCart
    &&
    storeName === CART_STORE_NAME
      ? (
        <Link className={btnClasses} href="/cart">
          Go to Cart
          <Icon name="cart" />
        </Link>
        )
      : (
        <button
          aria-label={storeName === CART_STORE_NAME ? 'Add to Cart' : 'Add to Wishlist'}
          type="button"
          className={btnClasses}
          onClick={handleAddToCart}
        >
          <span>
            {storeName === CART_STORE_NAME ? 'Add to Cart' : 'Add to Wishlist'}
          </span>
          <Icon name={storeName === CART_STORE_NAME ? 'cart' : isInWishlist ? 'heart-filled' : 'heart'} />
        </button>
        )
  )
}

export default StoreBtn
