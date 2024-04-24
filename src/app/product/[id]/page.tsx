import Link from "next/link"
import { type ProductType } from "@/shared/helper/types"
import PageTopItems from "../client/productImages"
import InnerHtml from "../client/InnerHtml"
import ProductDescription from "../client/ProductDescription"
import ProductList from "../../home/products/ProductsList"
import ProductAttributes from "../client/ProductAttributes"
import '../product.sass'

const ProductPage = async ({ params }: { params: { id: string } }): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/products?id=${params.id}`, { cache: 'no-store' })
  const product: ProductType = await res.json()

  return (
    <>
      <section className="sn-product-page">
        <PageTopItems imagesList={product.productImagesArray} />
        <h2>{product.productTitle}</h2>
        <div className="sn-product-page-description-set position-relative">
          <ProductDescription text={product.productDescription} />
        </div>
        <div className="sn-product-page-attribute-container">
          <ProductAttributes product={product} />
          <details className="sn-product-page-accordion about">
            <summary>About Product</summary>
            <InnerHtml data={product.productAdditional} className="sn-product-additional-info" />
          </details>
          <details className="sn-product-page-accordion review">
            <summary>Reviews</summary>
            <div className="review-body">
              <p className="no-review-text">No Reviews Yet</p>
              <Link href="/login" className="review-login-btn">Login to Add review</Link>
            </div>
          </details>
        </div>
      </section>
      <ProductList
        listQuery="/products?filters=true&set=6607ba1787019781d7ead2fb,6605608d2ffda6654676148f,660950fdada6d0858b1377fb,660675d23d7008d72eabdfcc,66078c500a0e70610e3a7429"
        outerClass="section-more-width more-popular"
        heading="YOU MAY ALSO LIKE"
        moreLink="/shop"
      />
    </>
  )
}

export default ProductPage
