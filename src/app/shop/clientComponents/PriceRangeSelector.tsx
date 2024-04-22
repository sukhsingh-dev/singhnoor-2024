'use client'

import React, { type ChangeEvent, useState } from "react"

const PriceRangeSelector = (): React.ReactNode => {
  const [minPrice, setMinPrice] = useState(699)
  const [maxPrice, setMaxPrice] = useState(4599)

  const priceThreshold = 300
  const startRange = 399
  const endRange = 4999

  const onMinPriceChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    if (!((minPrice + priceThreshold) > maxPrice)) {
      setMinPrice(parseInt(ev?.target?.value, 10))
    } else {
      setMinPrice(maxPrice - (priceThreshold + 200))
    }
  }
  const onMaxPriceChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    if (!((maxPrice - priceThreshold) < minPrice)) {
      setMaxPrice(parseInt(ev?.target?.value, 10))
    } else {
      setMaxPrice(minPrice + (priceThreshold + 200))
    }
  }
  return (
    <li>
      <details className="filters-fields-toggler">
        <summary>Price Range</summary>
        <div className="filters-fields-options">
          <div className="position-relative">
            <input
              name="min-range"
              min={startRange}
              max={endRange}
              value={minPrice}
              type="range"
              className="sn-input-range min-range"
              onChange={(e) => onMinPriceChange(e)}
            />
            <input
              name="max-range"
              min={startRange}
              max={endRange}
              value={maxPrice}
              type="range"
              className="sn-input-range max-range"
              onChange={(e) => onMaxPriceChange(e)}
            />
          </div>
          <span className="sn-input-range-set d-flex justify-between">
            <label>
              <span>Min</span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
              />
            </label>
            <label>
              <span>Max</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
              />
            </label>
          </span>
        </div>
      </details>
    </li>
  )
}

export default PriceRangeSelector
