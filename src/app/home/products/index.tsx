import { Heading, ProductCard } from "@/shared/components/ui"
import './style.sass'

type ProductVariety = Record<string, string>

interface Product {
  id: string
  name: string
  imgUrl: string
  bgColor: string
  oldPrice: number
  price: number
  varieties: ProductVariety[]
}

interface ProductProps {
  heading: string
  productList: Product[]
  moreLink: string
  outerClass?: string
}

const Products: React.FC<ProductProps> = ({
  heading,
  productList,
  moreLink,
  outerClass = ''
}: ProductProps) => (
  <section className={outerClass}>
    <Heading text={heading} />
    <ul className="product-list">
      {
        productList.map((product: Product) => (
          <li key={product.id} className="aos">
            <ProductCard product={product} />
          </li>
        ))
      }
    </ul>
    <div className="text-center my-24">
      <a href={moreLink} className="btn btn-secondary btn-arrow-long align-center position-relative">Check More</a>
    </div>
  </section>
)

export default Products