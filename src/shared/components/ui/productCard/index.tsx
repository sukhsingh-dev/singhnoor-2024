import Image from "next/image"
import Icon from "../../Icon"
import './style.sass'

interface Product {
  id: string
  imgUrl: string
  bgColor: string
  name: string
  varieties: Array<Record<string, string>>
  oldPrice: number
  price: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => (
  <div className="product-card-outer" key={product.id}>
    <div className="product-image-outer" style={{ color: product.bgColor }}>
      <Image
        src={`/images/${product.imgUrl}`}
        alt="SN Product img"
        width={175}
        height={240}
        quality={100}
      />
    </div>
    <h3 className="product-name">{product.name}</h3>
    <div className="d-flex justify-between product-info">
      <div className="product-info-inner">
        <button type="button" className="btn-product btn-wishlist" aria-label="Add to Wishlist">
          <span>Add to Wishlist</span>
          <Icon name="heart" />
        </button>
        <div className="product-price-info d-flex text-right">
          <span className="product-price-old">
            <span className="product-price-currency">₹</span>
            {product.oldPrice}
          </span>
          <span className="product-price text-primary">
            <span className="product-price-currency">₹</span>
            {product.price}
          </span>
        </div>
        <button type="button" className="btn-product btn-add" aria-label="Add to Cart">
          <span>Add to Cart</span>
          <Icon name="cart" />
        </button>
      </div>
    </div>
  </div>
)

export default ProductCard
