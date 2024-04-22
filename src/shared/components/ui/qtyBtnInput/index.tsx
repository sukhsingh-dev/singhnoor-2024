'use client'

import { useState } from 'react'
import Icon from '../../Icon'
import './qtyBtnInput.sass'

const QtyBtnInput = (): React.ReactNode => {
  const [qty, setQty] = useState(1)

  return (
    <div className="sn-product-page-attribute qty">
      <span className="sn-product-page-attribute-heading">Qty:</span>
      <div className="attribute-qty">
        <button
          type="button"
          aria-label="increase product quantity by 1"
          onClick={() => setQty((prev) => prev + 1)}
        >
          <Icon name="add" width={18} height={18} />
        </button>
        <input type="text" value={Number.isNaN(qty) ? 1 : qty} onChange={(e) => setQty(parseInt(e.target.value, 10))} />
        <button
          type="button"
          aria-label="decrease product quantity by 1"
          onClick={() => setQty((prev) => (qty > 1 ? prev - 1 : 1))}
        >
          <Icon name="minus" width={18} height={2} />
        </button>
      </div>
    </div>
  )
}

export default QtyBtnInput
