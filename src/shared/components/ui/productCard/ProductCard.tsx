import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import CartBtn from "../../cartBtn/CartBtn"
import Icon from "../../Icon"
import './style.sass'

interface Product {
  _id: string
  productImagesArray: string[]
  productTitle: string
  varieties: Array<Record<string, string>>
  productPrice: number
  productCategory: ProductCategoryTypes
}

interface ProductCategoryTypes {
  label: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
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
          width={240}
          height={240}
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
          <button type="button" className="btn-product btn-wishlist">
            <span>Add to Wishlist</span>
            <Icon name="heart" />
          </button>
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
          <CartBtn productInfo={{ _id: product._id, category: product.productCategory.label }} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
