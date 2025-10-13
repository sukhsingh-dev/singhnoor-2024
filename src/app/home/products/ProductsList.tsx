import { type ProductType, type ProductListTypes } from "@/shared/helper/types"
import Link from "next/link"
import ProductCard from "@/shared/components/ui/productCard/ProductCard"
import { Heading } from "@/shared/components/ui"
import './products.sass'

const ProductList = async (
  { outerClass, heading, listQuery, moreLink }: ProductListTypes
): Promise<JSX.Element> => {
  const result = await fetch(`${process.env.BACKOFFICE_URL}/${listQuery}`, { cache: 'no-store' })
  const productList = await result.json()

  return (
    <section className={outerClass}>
      <Heading text={heading} />
      <ul className="product-list">
        {
          productList.map((product: ProductType) => (
            <li key={product._id}>
              <ProductCard product={product} />
            </li>
          ))
        }
      </ul>
      <div className="text-center my-24">
        <Link href={moreLink} className="btn btn-secondary btn-arrow-long align-center position-relative">Check More</Link>
      </div>
    </section>
  )
}

export default ProductList
