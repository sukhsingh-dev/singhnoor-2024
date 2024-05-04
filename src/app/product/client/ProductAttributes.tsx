'use client'

import { type Select, type Product } from "@/shared/helper/types"
import { useState } from "react"
import QtyBtnInput from "@/shared/components/ui/qtyBtnInput"
import StoreBtn from "@/shared/components/storeBtn/StoreBtn"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import SizeChart from "./SizeChart"

const ProductAttributes = ({ product }: Product): React.ReactNode => {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.productSize[0].label)
  const [selectedColor, setSelectedColor] = useState<string | null>(product.productColors[0].label)
  const [selectedQty, setSelectedQty] = useState<number>(1)

  const roundToNearestTen = (number: number): number => Math.round(number / 10) * 10

  return (
    <>
      {
        product?.productSize.length !== 0 ?
          <div className="sn-product-page-attribute size">
            <span className="sn-product-page-attribute-heading">Size:</span>
            <ul className="attribute-sizes-list">
              {
                product.productSize.map((item: Select, index: number) => (
                  <li key={item.value}>
                    <input
                      type="radio"
                      name="size-radio"
                      value={item.value}
                      id={item.value}
                      defaultChecked={index === 0}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    />
                    <label htmlFor={item.value}>{item.label}</label>
                  </li>
                ))
              }
            </ul>
            <SizeChart category={product.productCategory.label} />
          </div>
          : ''
      }
      {
        product?.productColors.length > 1 ?
          <div className="sn-product-page-attribute colors">
            <span className="sn-product-page-attribute-heading">Colors:</span>
            <ul className="attribute-colors-list">
              {
                product.productColors.map((item: Select, index: number) => (
                  <li key={item.value}>
                    <input
                      type="radio"
                      name="color-radio"
                      value={item.value}
                      id={item.value}
                      defaultChecked={index === 0}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <label htmlFor={item.value} style={{ backgroundColor: item.value }} />
                  </li>
                ))
              }
            </ul>
          </div>
          : ''
      }
      <QtyBtnInput
        qty={selectedQty}
        setQty={setSelectedQty}
      />
      <div className="sn-product-page-float">
        <div className="sn-product-page-price">
          <span className="old-price">
            ₹
            {
              roundToNearestTen(product.productPrice + (product.productPrice / 2.5))
            }
          </span>
          <span className="text-primary new-price">
            ₹
            {product.productPrice}
          </span>
        </div>
        <StoreBtn
          productInfo={product}
          storeName={WISHLIST_STORE_NAME}
          selected={{
            size: selectedSize,
            color: selectedColor,
            qty: selectedQty
          }}
          btnClasses="btn-wishlist-float"
        />
        <StoreBtn
          productInfo={product}
          storeName={CART_STORE_NAME}
          selected={{
            size: selectedSize,
            color: selectedColor,
            qty: selectedQty
          }}
          btnClasses="btn btn-secondary align-center"
        />
      </div>
    </>
  )
}

export default ProductAttributes
