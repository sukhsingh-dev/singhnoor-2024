import Link from "next/link"
import ProductCard from "@/shared/components/ui/productCard/ProductCard"
import { Heading } from "@/shared/components/ui"
import './products.sass'

interface ProductListTypes {
  outerClass: string
  heading: string
  moreLink: string
  listQuery: string
}

interface ProductCategoryTypes {
  label: string
}

interface Product {
  _id: string
  productImagesArray: string[]
  productTitle: string
  varieties: Array<Record<string, string>>
  productPrice: number
  productCategory: ProductCategoryTypes
}

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
          productList.map((product: Product) => (
            <li key={product._id} className="aos">
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
