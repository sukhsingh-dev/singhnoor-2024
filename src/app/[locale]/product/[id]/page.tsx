/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
import { productList2 } from "@/shared/helper/store"
import { useLocale } from "next-intl"
import Icon from '@/shared/components/Icon'
import Products from '../../home/products'
import PageTopItems from "../client/productImages"
import InnerHtml from "../client/InnerHtml"
import '../product.sass'

const ProductPage = async ({ params }: { params: { id: string } }): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/products?id=${params.id}`, { cache: 'no-store' })
  const product = await res.json()
  const lang = useLocale()

  const roundToNearestTen = (number: number): number => Math.round(number / 10) * 10
  return (
    <>
      <section className="sn-product-page">
        <PageTopItems imagesList={product.productImagesArray} />
        <h2>{product.productTitle}</h2>
        <div className="sn-product-page-description-set position-relative">
          <input type="checkbox" id="textController" className="sn-input-read-more" />
          <p className="sn-product-page-description">
            {product.productDescription}
          </p>
          <span className="para-dots">...</span>
          <label htmlFor="textController" className="btn-read-more">
            Read
            <span className="read-more-text"> More</span>
            <span className="read-less-text d-none"> Less</span>
          </label>
        </div>
        <div className="sn-product-page-attribute-container">
          <div className="sn-product-page-float">
            <div className="sn-product-page-price">
              <span className="old-price">
                ₹
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  roundToNearestTen(product.productPrice + (product.productPrice / 2.5))
                }
              </span>
              <span className="text-primary new-price">
                ₹
                {product.productPrice}
              </span>
            </div>
            <button
              type="button"
              aria-label="Add to Wishlist"
              className="btn-wishlist-float"
            >
              <Icon name="heart" />
            </button>
            <button type="button" className="btn btn-secondary align-center">
              Add to Cart
              <Icon name="cart" />
            </button>
          </div>
          {
            product.productSize.length !== 0 ?
              <div className="sn-product-page-attribute size">
                <span className="sn-product-page-attribute-heading">Size:</span>
                <ul className="attribute-sizes-list">
                  {
                    product.productSize.map((item: any, index: number) => (
                      <li key={item.value}>
                        <input
                          type="radio"
                          name="size-radio"
                          value={item.value}
                          id={item.value}
                          defaultChecked={index === 0}
                        />
                        <label htmlFor={item.value}>{item.label}</label>
                      </li>
                    ))
                  }
                </ul>
              </div>
              : ''
          }
          {
            product.productColors.length !== 0 ?
              <div className="sn-product-page-attribute size">
                <span className="sn-product-page-attribute-heading">Size:</span>
                <ul className="attribute-colors-list">
                  {
                    product.productColors.map((item: any, index: number) => (
                      <li key={item.value}>
                        <input type="radio" name="color-radio" value={item.value} id={item.value} defaultChecked={index === 0} />
                        <label htmlFor={item.value} style={{ backgroundColor: item.value }} />
                      </li>
                    ))
                  }
                </ul>
              </div>
              : ''
          }
          <div className="sn-product-page-attribute qty">
            <span className="sn-product-page-attribute-heading">Qty:</span>
            <div className="attribute-qty">
              <button type="button" aria-label="increase product quantity by 1">
                <Icon name="add" width={18} height={18} />
              </button>
              <input type="number" defaultValue={1} />
              <button type="button" aria-label="decrease product quantity by 1">
                <Icon name="minus" width={18} height={2} />
              </button>
            </div>
          </div>
          <details className="sn-product-page-accordion about">
            <summary>About Product</summary>
            <InnerHtml data={product.productAdditional} className="sn-product-additional-info" />
          </details>
          <details className="sn-product-page-accordion guide">
            <summary>Size Guide</summary>
            <p>Size Guide Chart</p>
          </details>
          <details className="sn-product-page-accordion review">
            <summary>Reviews</summary>
            <p>Reviews Data and add review option</p>
          </details>
        </div>
      </section>
      <Products heading="YOU MAY ALSO LIKE" productList={productList2} moreLink={`${lang}/shop`} outerClass="section-more-width top-picks" />
    </>
  )
}

export default ProductPage
