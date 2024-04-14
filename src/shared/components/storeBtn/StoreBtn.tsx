'use client'

import { useContext } from "react"
import Icon from "../Icon"
import { CartContext } from "../context/CartContext"

interface ProductTypes {
  _id: string
  category: string
  qty?: number
}

interface StoreBtnTypes {
  productInfo: ProductTypes
  storeName: string
  btnClasses: string
}

const StoreBtn = ({ productInfo, storeName, btnClasses }: StoreBtnTypes): React.ReactNode => {
  const { addProduct, addToWishList } = useContext(CartContext)

  const handleAddToCart = (): void => {
    if (storeName === 'sn-cart') {
      addProduct(productInfo)
    } else {
      addToWishList(productInfo)
    }
  }

  return (
    <button
      type="button"
      className={btnClasses}
      onClick={() => handleAddToCart()}
    >
      <span>{storeName === 'sn-cart' ? 'Add to Cart' : 'Add to Wishlist'}</span>
      <Icon name={storeName === 'sn-cart' ? 'cart' : 'heart'} />
    </button>
  )
}

export default StoreBtn
