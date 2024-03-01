import Icon from "@/shared/components/Icon"
import { productList, productList2 } from "@/shared/helper/store"
import ProductCard from "@/shared/components/ui/productCard"
import './shop.sass'

const ShopPage = (): React.ReactNode => {
  const shopProducts = [...productList2, ...productList]
  return (
    <section className="shop-page-section section-more-width">
      <div className="filters-fields-outer">
        <div className="shop-page-actions view-group">
          <button
            type="button"
            className="btn btn-primary btn-filter"
          >
            Filter
            <Icon name="filter" />
          </button>

          <fieldset className="shop-page-actions-view">
            <input type="radio" name="productView" id="productViewGrid" value="productViewGrid" defaultChecked />
            <label htmlFor="productViewGrid">
              <Icon name="grid" />
            </label>
            <input type="radio" name="productView" id="productViewList" value="productViewList" />
            <label htmlFor="productViewList">
              <Icon name="list" width={26} height={16} />
            </label>
          </fieldset>
        </div>
        <div className="filters-fields">
          <div className="filters-fields-heading">
            <h2>Filters</h2>
            <button type="button" className="btn-clear">
              Clear all
              <Icon name="close" width={16} height={16} />
            </button>
          </div>
          <div className="filters-fields-body">
            <ul className="filters-fields-main">
              <li>Category</li>
              <li>For</li>
              <li>Material</li>
              <li>Sizes</li>
              <li>Colors</li>
              <li>Price Rang</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="shop-page-inner">
        <div className="shop-page-actions dropdown-group">
          <div className="dropdown-outer">
            <div className="dropdown-inner">
              <span>Per Page:&nbsp;</span>
              <span className="text-primary">12</span>
              <Icon name="chevron-up" width={12} height={8} />
            </div>
          </div>

          <div className="dropdown-outer">
            <div className="dropdown-inner">
              <span>Sort by:&nbsp;</span>
              <span className="text-primary">Low to High</span>
              <Icon name="chevron-up" width={12} height={8} />
            </div>
          </div>
        </div>
        <div className="filters-fields-applied">
          <div className="filters-fields-pill">
            <span>T-shirt</span>
            <button type="button" aria-label="remove filter"><Icon name="close" /></button>
          </div>

          <div className="filters-fields-pill">
            <span>Men</span>
            <button type="button" aria-label="remove filter"><Icon name="close" /></button>
          </div>

          <div className="filters-fields-pill">
            <span>499</span>
            <button type="button" aria-label="remove filter"><Icon name="close" /></button>
          </div>
        </div>
        <ul className="product-list">
          {
            shopProducts.map((product) => (
              <li key={product.id} className="aos">
                <ProductCard product={product} />
              </li>
            ))
          }
        </ul>
      </div>
      <div className="sn-pagination">
        <ul>
          <li>
            <button type="button" className="btn activate">1</button>
          </li>
          <li>
            <button type="button" className="btn">2</button>
          </li>
          <li>
            <button type="button" className="btn">3</button>
          </li>
          <li className="last-page">...</li>
          <li>
            <button type="button" className="btn">21</button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ShopPage
