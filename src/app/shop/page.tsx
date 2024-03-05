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
          <label
            htmlFor="filter-fields-toggler"
            className="btn btn-primary btn-filter"
          >
            Filter
            <Icon name="filter" />
          </label>

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
        <input type="checkbox" className="filter-fields-toggler" id="filter-fields-toggler" />
        <div className="filters-fields">
          <div className="filters-fields-heading">
            <h2>Filters</h2>
            <label
              className="filter-fields-toggler-close"
              htmlFor="filter-fields-toggler"
            >
              <Icon name="close" />
            </label>
            <button type="button" className="btn-clear">
              Clear all
              <Icon name="close" width={16} height={16} />
            </button>
          </div>
          <div className="filters-fields-body">
            <ul className="filters-fields-main">
              <li>
                <details className="filters-fields-toggler">
                  <summary>Category</summary>
                  <p className="filters-fields-options">
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Gatra</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Belts</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">T-shirts</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Bags</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                  </p>
                </details>
              </li>
              <li>
                <details className="filters-fields-toggler">
                  <summary>For</summary>
                  <p className="filters-fields-options">
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Men</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Women</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Kids</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Couple</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                  </p>
                </details>
              </li>
              <li>
                <details className="filters-fields-toggler">
                  <summary>Material</summary>
                  <p className="filters-fields-options">
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Cotton</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Leather</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">Resham</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                  </p>
                </details>
              </li>
              <li>
                <details className="filters-fields-toggler">
                  <summary>Sizes</summary>
                  <p className="filters-fields-options">
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">XS</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">M</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">L</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">XL</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                    <label className="sn-custom-checkbox-outer">
                      <span className="sn-custom-checkbox-label">XXL</span>
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" />
                    </label>
                  </p>
                </details>
              </li>
              <li>
                <details className="filters-fields-toggler">
                  <summary>Colors</summary>
                  <p className="filters-fields-options color">
                    <label className="sn-custom-checkbox-outer color">
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" style={{ backgroundColor: '#000' }} />
                    </label>

                    <label className="sn-custom-checkbox-outer color">
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" style={{ backgroundColor: 'red' }} />
                    </label>
                    <label className="sn-custom-checkbox-outer color">
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox" style={{ backgroundColor: 'green' }} />
                    </label>
                    <label className="sn-custom-checkbox-outer color">
                      <input type="checkbox" className="sn-custom-checkbox-input" />
                      <span className="sn-custom-checkbox white" style={{ backgroundColor: 'white' }} />
                    </label>
                  </p>
                </details>
              </li>
              <li>
                <details className="filters-fields-toggler">
                  <summary>Price Range</summary>
                  <p className="filters-fields-options">
                    <input type="range" className="sn-input-range" />
                    <span className="sn-input-range-set d-flex justify-between">
                      <label>
                        <span>Min</span>
                        <input defaultValue="399" type="number" />
                      </label>
                      <label>
                        <span>Max</span>
                        <input defaultValue="9999" type="number" />
                      </label>
                    </span>
                  </p>
                </details>
              </li>
            </ul>
          </div>
          <div className="filters-fields-footer">
            <button type="button" className="btn btn-primary">Apply Filters</button>
          </div>
        </div>
      </div>

      <div className="shop-page-inner">
        <div className="shop-page-actions dropdown-group">
          <div className="dropdown-outer">
            <input type="checkbox" className="dropdown-input" id="perPage" />
            <label className="dropdown-inner" htmlFor="perPage">
              <span>Per Page:&nbsp;</span>
              <span className="text-primary">12</span>
              <Icon name="chevron-up" width={12} height={8} />
            </label>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <button type="button">16</button>
                </li>
                <li>
                  <button type="button">20</button>
                </li>

                <li>
                  <button type="button">24</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="dropdown-outer">
            <input type="checkbox" className="dropdown-input" id="sortBy" />
            <label className="dropdown-inner" htmlFor="sortBy">
              <span>Sort by:&nbsp;</span>
              <span className="text-primary">Low to High</span>
              <Icon name="chevron-up" width={12} height={8} />
            </label>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <button type="button">High to Low</button>
                </li>
                <li>
                  <button type="button">New</button>
                </li>

                <li>
                  <button type="button">Most Popular</button>
                </li>
              </ul>
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
