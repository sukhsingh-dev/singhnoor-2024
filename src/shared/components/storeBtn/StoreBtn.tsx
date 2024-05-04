'use client'

import { type StoreBtnTypes } from "@/shared/helper/types"
import { CART_STORE_NAME } from "@/shared/helper/constants"
import { useShoppingCart } from "../context/CartContext"
import Icon from "../Icon"

const StoreBtn = ({
  productInfo, storeName, btnClasses, selected
}: StoreBtnTypes): React.ReactNode => {
  const { addToCart, addToWishList } = useShoppingCart()

  const handleAddToCart = (): void => {
    const productData = { ...productInfo, selected }
    if (storeName === CART_STORE_NAME) {
      addToCart(productData)
    } else {
      addToWishList(productInfo)
    }
  }

  return (
    <button
      aria-label={storeName === CART_STORE_NAME ? 'Add to Cart' : 'Add to Wishlist'}
      type="button"
      className={btnClasses}
      onClick={() => handleAddToCart()}
    >
      <span>
        {storeName === CART_STORE_NAME ? 'Add to Cart' : 'Add to Wishlist'}
      </span>
      <Icon name={storeName === CART_STORE_NAME ? 'cart' : 'heart'} />
    </button>
  )
}

export default StoreBtn
