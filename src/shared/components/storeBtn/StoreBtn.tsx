'use client'

import { type StoreBtnTypes } from "@/shared/helper/types"
import { useContext, useState, useEffect } from "react"
import Icon from "../Icon"
import { CartContext } from "../context/CartContext"

const StoreBtn = ({ productInfo, storeName, btnClasses }: StoreBtnTypes): React.ReactNode => {
  const { cartProducts, wishlistProducts, addProduct, addToWishList } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  const handleAddToCart = (): void => {
    if (storeName === 'sn-cart') {
      addProduct(productInfo)
    } else {
      addToWishList(productInfo)
    }
  }

  useEffect(() => {
    if (storeName === 'sn-cart' && cartProducts.some((item) => item._id === productInfo._id)) {
      setIsActive(true)
    }

    if (storeName === 'sn-wishlist' && wishlistProducts.some((item) => item._id === productInfo._id)) {
      setIsActive(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleAddToCart])

  return (
    <button
      type="button"
      className={`${btnClasses} ${isActive ? 'isActive' : ''}`}
      onClick={() => handleAddToCart()}
    >
      <span>
        {
          // eslint-disable-next-line no-nested-ternary
          storeName === 'sn-cart'
            ? isActive ? 'Added to Cart' : 'Add to Cart'
            : 'Add to Wishlist'
        }
      </span>
      <Icon name={
        // eslint-disable-next-line no-nested-ternary
        storeName === 'sn-cart'
          ? isActive ? 'cart-filled' : 'cart'
          : isActive ? 'heart-filled' : 'heart'
      }
      />
    </button>
  )
}

export default StoreBtn
