import { type AttributeType, type CategoryType } from "@/shared/helper/types"
import Icon from "@/shared/components/Icon"
import FilterCheckbox from "./clientComponents/FilterCheckbox"
// import PriceRangeSelector from "./clientComponents/PriceRangeSelector"

const ShopFilter = async (
  { appliedFilters }: { appliedFilters: Record<string, string> | any }
): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/categories`, { cache: 'no-store' })
  const shopCategories = await res.json()
  const appliedFiltersArray = []

  // eslint-disable-next-line no-restricted-syntax
  for (const key in appliedFilters) {
    if ((Object.prototype.hasOwnProperty.call(appliedFilters, key)) && appliedFilters[key] !== 'true') {
      const values: string[] = appliedFilters[key].split(',').map((value: string) => value.trim())
      appliedFiltersArray.push(...values)
    }
  }

  const attributesData = await fetch(`${process.env.BACKOFFICE_URL}/attributes`, { cache: 'no-store' })
  const attributesList = await attributesData.json()

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
                    shopCategories.map((category: CategoryType) => {
                      if (category.subCategory.length !== 0) {
                        return (
                          <details className="filters-fields-options-outer" key={category._id}>
                            <summary>{category.categoryName}</summary>
                            <p>
                              {
                                category.subCategory.map((subCategory) => (
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
            {
              attributesList.map((attribute: AttributeType) => (
                <li key={attribute._id}>
                  <details className="filters-fields-toggler">
                    <summary>{attribute.attributeName}</summary>
                    <p className={`filters-fields-options ${attribute.attributeName}`}>
                      {
                        attribute.attributeOptions.map((option) => (
                          <label key={option.value} className={`sn-custom-checkbox-outer ${attribute.attributeName}`}>
                            <span className="sn-custom-checkbox-label">{option.label}</span>
                            <FilterCheckbox
                              checkboxSearch={attribute.attributeName}
                              checkboxName={option.value}
                            />
                            {attribute.attributeName === 'Colors' ? <span className="sn-custom-checkbox" style={{ backgroundColor: option.label }} /> : <span className="sn-custom-checkbox" />}
                          </label>
                        ))
                      }
                    </p>
                  </details>
                </li>
              ))
            }
            {/* <PriceRangeSelector /> */}
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
