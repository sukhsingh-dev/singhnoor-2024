import { useLocale } from "next-intl"
import Link from "next/link"
import Icon from '@/shared/components/Icon'
import StoreBtn from "@/shared/components/storeBtn/StoreBtn"
import { CART_STORE_NAME, WISHLIST_STORE_NAME } from "@/shared/helper/constants"
import { type Select, type ProductType } from "@/shared/helper/types"
import PageTopItems from "../client/productImages"
import InnerHtml from "../client/InnerHtml"
import ProductDescription from "../client/ProductDescription"
import SizeChart from "../client/SizeChart"
import ProductList from "../../home/products/ProductsList"
import '../product.sass'

const ProductPage = async ({ params }: { params: { id: string } }): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/products?id=${params.id}`, { cache: 'no-store' })
  const product: ProductType = await res.json()
  const lang = useLocale()

  const roundToNearestTen = (number: number): number => Math.round(number / 10) * 10
  return (
    <>
      <section className="sn-product-page">
        <PageTopItems imagesList={product.productImagesArray} />
        <h2>{product.productTitle}</h2>
        <div className="sn-product-page-description-set position-relative">
          <ProductDescription text={product.productDescription} />
        </div>
        <div className="sn-product-page-attribute-container">
          {
            product.productSize.length !== 0 ?
              <div className="sn-product-page-attribute size">
                <span className="sn-product-page-attribute-heading">Size:</span>
                <ul className="attribute-sizes-list">
                  {
                    product.productSize.map((item: Select, index: number) => (
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
                <SizeChart category={product.productCategory.label} />
              </div>
              : ''
          }
          {
            product.productColors.length > 1 ?
              <div className="sn-product-page-attribute colors">
                <span className="sn-product-page-attribute-heading">Colors:</span>
                <ul className="attribute-colors-list">
                  {
                    product.productColors.map((item: Select, index: number) => (
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
          <div className="sn-product-page-float">
            <div className="sn-product-page-price">
              <span className="old-price">
                ₹
                {
                  roundToNearestTen(product.productPrice + (product.productPrice / 2.5))
                }
              </span>
              <span className="text-primary new-price">
                ₹
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
              storeName={WISHLIST_STORE_NAME}
              btnClasses="btn-wishlist-float"
            />
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
              btnClasses="btn btn-secondary align-center"
            />
          </div>
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
        moreLink={`${lang}/shop`}
      />
    </>
  )
}

export default ProductPage
