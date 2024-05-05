'use client'

import { type QtyBtnInputTypes } from '@/shared/helper/types'
import { useEffect } from 'react'
import { useShoppingCart } from '../../context/CartContext'
import Icon from '../../Icon'
import './qtyBtnInput.sass'

const QtyBtnInput = (
  { qty, setQty, productInfo, storeName }: QtyBtnInputTypes
): React.ReactNode => {
  const { updateCart } = useShoppingCart()

  useEffect(() => {
    if (productInfo !== undefined && storeName !== undefined) {
      updateCart(storeName, productInfo, "qty", qty)
    }
  }, [qty])

  return (
    <div className="sn-product-page-attribute qty">
      <span className="sn-product-page-attribute-heading">Qty:</span>
      <div className="attribute-qty">
        <button
          type="button"
          aria-label="increase product quantity by 1"
          onClick={() => setQty(qty + 1)}
        >
          <Icon name="add" width={18} height={18} />
        </button>
        <input type="text" value={Number.isNaN(qty) ? 1 : qty} onChange={(e) => setQty(parseInt(e.target.value, 10))} />
        <button
          type="button"
          aria-label="decrease product quantity by 1"
          onClick={() => setQty((qty > 1 ? qty - 1 : 1))}
        >
          <Icon name="minus" width={18} height={2} />
        </button>
      </div>
    </div>
  )
}

export default QtyBtnInput
