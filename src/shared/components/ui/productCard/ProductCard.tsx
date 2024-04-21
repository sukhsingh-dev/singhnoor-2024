import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import { type Product } from "@/shared/helper/types"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import StoreBtn from "../../storeBtn/StoreBtn"
import './style.sass'

const ProductCard: React.FC<Product> = ({ product }: Product) => {
  const lang = useLocale()
  const roundToNearestTen = (number: number): number => Math.round(number / 10) * 10
  return (
    <div className="product-card-outer" key={product._id}>
      <Link
        href={`/${lang}/product/${product._id}`}
        className="product-image-outer"
      >
        <Image
          src={product.productImagesArray[0]}
          alt="SN Product img"
          width={270}
          height={270}
          quality={100}
        />
      </Link>
      <Link
        href={`/${lang}/product/${product._id}`}
        className="product-name"
      >
        {product.productTitle}
      </Link>
      <div className="d-flex justify-between product-info">
        <div className="product-info-inner">
          <StoreBtn
            productInfo={{
              _id: product._id,
              productCategory: product.productCategory.label,
              productSubCategory: product.productSubCategory.label,
              productTitle: product.productTitle,
              productGender: product.productGender,
              productPrice: product.productPrice,
              productImagesArray: product.productImagesArray[0],
              productTags: product.productTags,
              productSize: product.productSize,
              productMaterial: product.productMaterial,
              productColors: product.productColors,
              productWork: product.productWork,
              productQty: 1
            }}
            storeName={WISHLIST_STORE_NAME}
            btnClasses="btn-product btn-wishlist"
          />
          <div className="product-price-info d-flex text-right">
            <span className="product-price-old">
              <span className="product-price-currency">₹</span>
              {roundToNearestTen(product.productPrice + (product.productPrice / 2.5))}
            </span>
            <span className="product-price text-primary">
              <span className="product-price-currency">₹</span>
              {product.productPrice}
            </span>
          </div>
          <StoreBtn
            productInfo={{
              _id: product._id,
              productCategory: product.productCategory.label,
              productSubCategory: product.productSubCategory.label,
              productTitle: product.productTitle,
              productGender: product.productGender,
              productPrice: product.productPrice,
              productImagesArray: product.productImagesArray[0],
              productTags: product.productTags,
              productSize: product.productSize,
              productMaterial: product.productMaterial,
              productColors: product.productColors,
              productWork: product.productWork,
              productQty: 1
            }}
            storeName={CART_STORE_NAME}
            btnClasses="btn-product btn-add"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
