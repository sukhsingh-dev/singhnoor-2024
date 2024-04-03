import Icon from "@/shared/components/Icon"
import FilterCheckbox from "./clientComponents/FilterCheckbox"

export const genderOptions = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'couple', label: 'Couple' },
  { value: 'kids', label: 'Kids' }
]

const ShopFilter = async ({ appliedFilters }: any): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/categories`, { cache: 'no-store' })
  const shopCategories = await res.json()
  const appliedFiltersArray = []

  /* eslint-disable no-restricted-syntax */
  for (const key in appliedFilters) {
    if ((Boolean(Object.prototype.hasOwnProperty.call(appliedFilters, key))) && appliedFilters[key] !== 'true') {
      const values: string[] = appliedFilters[key].split(',').map((value: string) => value.trim())
      appliedFiltersArray.push(...values)
    }
  }

  return (
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
          <label
            htmlFor="productViewGrid"
            className="productViewGrid"
          >
            <Icon name="grid" />
          </label>
          <label
            htmlFor="productViewList"
            className="productViewList"
          >
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
          {
            appliedFiltersArray.length > 1 &&
            (
              <a href="/en/shop" className="btn-clear">
                Clear all
                <Icon name="close" width={16} height={16} />
              </a>
            )
          }
        </div>
        <div className="filters-fields-applied">
          {
            appliedFiltersArray.map((filter) => (
              <label htmlFor={filter} key={filter} className="filters-fields-pill">
                <span>{filter}</span>
                <Icon name="close" />
              </label>
            ))
          }

        </div>
        <div className="filters-fields-body">
          <ul className="filters-fields-main">
            <li>
              <details className="filters-fields-toggler">
                <summary>Category</summary>
                <div className="filters-fields-options">
                  {
                    shopCategories.map((category: any) => {
                      if (category.subCategory.length !== 0) {
                        return (
                          <details className="filters-fields-options-outer" key={category._id}>
                            <summary>{category.categoryName}</summary>
                            <p>
                              {
                                category.subCategory.map((subCategory: any) => (
                                  <label key={subCategory.value} className="sn-custom-checkbox-outer">
                                    <span className="sn-custom-checkbox-label">{subCategory.label}</span>
                                    <FilterCheckbox
                                      checkboxSearch="subCategory"
                                      checkboxName={subCategory.label}
                                    />
                                    <span className="sn-custom-checkbox" />
                                  </label>
                                ))
                              }
                            </p>
                          </details>
                        )
                      }
                      return (
                        <label key={category._id} className="sn-custom-checkbox-outer">
                          <span className="sn-custom-checkbox-label">{category.categoryName}</span>
                          <FilterCheckbox
                            checkboxSearch="category"
                            checkboxName={category.categoryName}
                          />
                          <span className="sn-custom-checkbox" />
                        </label>
                      )
                    })
                  }
                </div>
              </details>
            </li>
            <li>
              <details className="filters-fields-toggler">
                <summary>For</summary>
                <p className="filters-fields-options">
                  {
                    genderOptions.map((option) => (
                      <label key={option.value} className="sn-custom-checkbox-outer">
                        <span className="sn-custom-checkbox-label">{option.label}</span>
                        <FilterCheckbox
                          checkboxSearch="for"
                          checkboxName={option.value}
                        />
                        <span className="sn-custom-checkbox" />
                      </label>
                    ))
                  }
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
          <label className="btn btn-primary" htmlFor="filter-fields-toggler">Apply Filters</label>
        </div>
      </div>
    </div>
  )
}

export default ShopFilter
