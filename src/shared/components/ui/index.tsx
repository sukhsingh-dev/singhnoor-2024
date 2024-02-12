import Image from "next/image"
import Icon from "../Icon"

interface HeadingProps {
  text: string
}

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

interface piBgProps {
  className: string
  color: string
}

export const PiBg: React.FC<piBgProps> = ({ className, color }: piBgProps) => (
  <svg className={className} width={172} height={125} viewBox="0 0 172 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11.9023C0 5.12619 5.86009 -0.163073 12.6008 0.528973L161.232 15.7884C167.063 16.3871 171.497 21.2995 171.497 27.1617V113.567C171.497 119.881 166.378 125 160.064 125H11.4331C5.11879 125 0 119.881 0 113.567V11.9023Z" fill={color} />
  </svg>
)

export const Heading: React.FC<HeadingProps> = ({ text }: HeadingProps) => <h2 className="page-heading">{text}</h2>

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => (
  <div className="product-card-outer" key={product.id}>
    <button type="button" aria-label="Heart icon" className="btn btn-small btn-wishlist position-absolute">
      <Icon name="heart" width={16} height={16} className="text-primary" />
    </button>
    <div className="product-image-outer">
      <Image
        src={`/images/${product.imgUrl}`}
        alt="SN Product img"
        loading="lazy"
        width={175}
        height={240}
      />
      <PiBg className="pi-decorator position-absolute" color={product.bgColor} />
    </div>
    <div className="d-flex justify-between">
      <div>
        <h3 className="product-name">{product.name}</h3>
        <div className="text-secondary product-varieties">
          {product.varieties.map((item, index) => {
            // eslint-disable-next-line no-restricted-syntax, guard-for-in, no-unreachable-loop
            for (const key in item) {
              return (
                <span key={key[index]}>
                  <span className="product-variety-count">{item[key]}</span>
                  <span>{key}</span>
                  <span>, </span>
                </span>
              )
            }
            return null
          })}
        </div>
      </div>

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
    </div>
  </div>
)
