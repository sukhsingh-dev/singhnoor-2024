'use client'

import { type InCartProductType, type StoreBtnTypes } from "@/shared/helper/types"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import Icon from "../Icon"
import { useShoppingCart } from "../context/CartContext"

const StoreBtn = ({ _id, storeName, btnClasses, selected }: StoreBtnTypes): React.ReactNode => {
  const { addToCart, addToWishList } = useShoppingCart()

  const handleAddToCart = (): void => {
    const productData: InCartProductType = { _id, selected }
    if (storeName === CART_STORE_NAME) {
      addToCart(productData)
    } else {
      addToWishList(productData)
    }
  }

  return (
    <button
      aria-label={
        storeName === CART_STORE_NAME
          ? 'Add to Cart'
          : 'Add to Wishlist'
      }
      type="button"
      className={btnClasses}
      onClick={() => handleAddToCart()}
    >
      <span>
        {
          storeName === CART_STORE_NAME
            ? 'Add to Cart'
            : 'Add to Wishlist'
        }
      </span>
      <Icon name={
        storeName === CART_STORE_NAME
          ? 'cart'
          : 'heart'
      }
      />
    </button>
  )
}

export default StoreBtn
