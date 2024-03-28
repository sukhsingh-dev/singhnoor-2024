import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import Icon from "../../Icon"
import './style.sass'

interface Product {
  _id: string
  productImagesArray: string[]
  productTitle: string
  varieties: Array<Record<string, string>>
  productPrice: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const lang = useLocale()

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
              {product.productPrice}
            </span>
            <span className="product-price text-primary">
              <span className="product-price-currency">₹</span>
              {product.productPrice}
            </span>
          </div>
          <button type="button" className="btn-product btn-add">
            <span>Add to Cart</span>
            <Icon name="cart" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
