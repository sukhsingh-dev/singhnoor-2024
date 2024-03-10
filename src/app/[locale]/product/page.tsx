import { productList2 } from "@/shared/helper/store"
import { useLocale } from "next-intl"
import Image from 'next/image'
import Icon from '@/shared/components/Icon'
import Products from '../home/products'
import './product.sass'

const ProductPage = (): React.ReactNode => {
  const lang = useLocale()

  return (
    <>
      <section className="sn-product-page">
        <div className="sn-product-page-top">
          <button type="button" className="page-back-btn">
            <Icon name="chevron-up" width={12} height={8} />
            <span>Go Back</span>
          </button>
          <button
            type="button"
            aria-label="Add to Wishlist"
            className="btn-product btn-wishlist"
          >
            <Icon name="heart" />
          </button>
          <div className="sn-product-page-images">
            <Image
              src="/images/t-shirts/t-4.webp"
              alt="product image"
              width={400}
              height={400}
              quality={100}
            />
            <Image
              src="/images/t-shirts/t-5.webp"
              alt="product image"
              width={400}
              height={400}
              quality={100}
            />
            <Image
              src="/images/t-shirts/t-6.webp"
              alt="product image"
              width={400}
              height={400}
              quality={100}
            />
            <Image
              src="/images/t-shirts/t-2.webp"
              alt="product image"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <ul className="sn-product-page-slider">
            <li>
              <button type="button">Slide 1</button>
            </li>
            <li>
              <button type="button">Slide 2</button>
            </li>
            <li className="active">
              <button type="button">Slide 3</button>
            </li>
            <li>
              <button type="button">Slide 4</button>
            </li>
          </ul>
        </div>
        <div className="sn-product-page-info sn-product-page-spacing">
          <button type="button" aria-label="push info above image" className="btn-card-line" />
          <div className="sn-product-page-info-head">
            <h2>Fighter Singh T-shirt</h2>
            <p className="sn-product-page-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus accusantium
              enim, eum dolore neque blanditiis fuga dolores possimus. Fuga,
              dignissimos in recusandae accusantium fugit corrupti impedit ullam dolorum quam vel.
            </p>
            <div className="sn-product-page-thumbnails">
              <Image
                src="/images/t-shirts/t-4.webp"
                alt="product image"
                width={80}
                height={80}
                quality={100}
              />
              <Image
                src="/images/t-shirts/t-5.webp"
                alt="product image"
                width={80}
                height={80}
                quality={100}
              />
              <Image
                src="/images/t-shirts/t-6.webp"
                alt="product image"
                width={80}
                height={80}
                quality={100}
              />
              <Image
                src="/images/t-shirts/t-2.webp"
                alt="product image"
                width={80}
                height={80}
                quality={100}
              />
            </div>
          </div>
          <div className="sn-product-page-attribute-container">
            <div className="sn-product-page-attribute size">
              <span className="sn-product-page-attribute-heading">Size:</span>
              <ul className="attribute-sizes-list">
                <li>
                  <input type="radio" name="size-radio" value="XS" id="XS" />
                  <label htmlFor="XS">XS</label>
                </li>
                <li>
                  <input type="radio" name="size-radio" value="S" id="S" />
                  <label htmlFor="S">S</label>
                </li>
                <li>
                  <input type="radio" name="size-radio" value="M" id="M" />
                  <label htmlFor="M">M</label>
                </li>
                <li>
                  <input type="radio" name="size-radio" value="L" id="L" defaultChecked />
                  <label htmlFor="L">L</label>
                </li>
                <li>
                  <input type="radio" name="size-radio" value="XL" id="XL" defaultChecked />
                  <label htmlFor="XL">XL</label>
                </li>
                <li>
                  <input type="radio" name="size-radio" value="XXL" id="XXL" defaultChecked />
                  <label htmlFor="XXL">XXL</label>
                </li>
              </ul>
            </div>
            <div className="sn-product-page-attribute color">
              <span className="sn-product-page-attribute-heading">Colors:</span>
              <ul className="attribute-colors-list">
                <li>
                  <input type="radio" name="color-radio" value="black" id="black" />
                  <label htmlFor="black" style={{ backgroundColor: '#000' }} />
                </li>
                <li>
                  <input type="radio" name="color-radio" value="primary" id="primary" />
                  <label htmlFor="primary" style={{ backgroundColor: '#007BFF' }} />
                </li>
                <li>
                  <input type="radio" name="color-radio" value="secondary" id="secondary" defaultChecked />
                  <label htmlFor="secondary" style={{ backgroundColor: '#FA6B38' }} />
                </li>
                <li>
                  <input type="radio" name="color-radio" value="white" id="white" />
                  <label className="white" htmlFor="white" style={{ backgroundColor: '#F2F2F2' }} />
                </li>
              </ul>
            </div>
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
                <span className="old-price">₹699</span>
                <span className="text-primary new-price">₹499</span>
              </div>
              <button type="button" className="btn btn-secondary align-center">
                Add to Cart
                <Icon name="cart" />
              </button>
            </div>
            <details className="sn-product-page-accordion about">
              <summary>About Product</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nam quos animi est, culpa temporibus corporis aliquid
              </p>
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
        </div>
      </section>
      <Products heading="YOU MAY ALSO LIKE" productList={productList2} moreLink={`${lang}/shop`} outerClass="section-more-width top-picks sn-product-page-spacing" />
    </>
  )
}

export default ProductPage
