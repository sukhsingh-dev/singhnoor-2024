'use client'

import { useContext, useState, useEffect } from "react"
import { type StoreBtnTypes } from "@/shared/helper/types"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import { CartContext } from "../context/CartContext"
import Icon from "../Icon"

const StoreBtn = ({ productInfo, storeName, btnClasses }: StoreBtnTypes): React.ReactNode => {
  const { cartProducts, wishlistProducts, addProduct, addToWishList } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  const handleAddToCart = (): void => {
    if (storeName === CART_STORE_NAME) {
      addProduct(productInfo)
    } else {
      addToWishList(productInfo)
    }
  }

  useEffect(() => {
    if (storeName === CART_STORE_NAME &&
      cartProducts.some((item) => item._id === productInfo._id)) {
      setIsActive(true)
    }

    if (storeName === WISHLIST_STORE_NAME &&
      wishlistProducts.some((item) => item._id === productInfo._id)) {
      setIsActive(true)
    }
  }, [handleAddToCart])

  return (
    <button
      type="button"
      className={`${btnClasses} ${isActive ? 'isActive' : ''}`}
      onClick={() => handleAddToCart()}
    >
      <span>
        {
          storeName === CART_STORE_NAME
            ? isActive ? 'Added to Cart' : 'Add to Cart'
            : 'Add to Wishlist'
        }
      </span>
      <Icon name={
        storeName === CART_STORE_NAME
          ? isActive ? 'cart-filled' : 'cart'
          : isActive ? 'heart-filled' : 'heart'
      }
      />
    </button>
  )
}

export default StoreBtn
