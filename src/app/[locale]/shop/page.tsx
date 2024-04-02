import Icon from "@/shared/components/Icon"
import ProductCard from "@/shared/components/ui/productCard/ProductCard"
import ShopFilter from "./ShopFilters"
import './shop.sass'

interface FilterTypes {
  filters: string | undefined
}

interface SearchParam {
  searchParams: FilterTypes
}

const ShopPage = async ({ searchParams }: SearchParam): Promise<JSX.Element> => {
  let result
  const { filters } = searchParams
  const queryString = Object.entries(searchParams)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  if (Object.keys(searchParams).length === 0 || filters === undefined) {
    result = await fetch(`${process.env.BACKOFFICE_URL}/products`, { cache: 'no-store' })
  } else {
    result = await fetch(`${process.env.BACKOFFICE_URL}/products?${queryString}`, { cache: 'no-store' })
  }

  const shopProducts = await result.json()

  return (
    <section className="shop-page-section section-more-width">
      <input
        type="radio"
        name="productView"
        id="productViewGrid"
        value="productViewGrid"
        className="shop-page-actions-input"
        defaultChecked
      />
      <input
        type="radio"
        name="productView"
        id="productViewList"
        value="productViewList"
        className="shop-page-actions-input"
      />
      <ShopFilter appliedFilters={searchParams} />
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
        <ul className="product-list">
          {
            shopProducts.map((product: any) => (
              <li key={product._id} className="aos">
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
