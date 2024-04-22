'use client'

import { type FilterCheckboxTypes } from "@/shared/helper/types"
import { useRouter, useSearchParams } from "next/navigation"

const FilterCheckbox = (
  { checkboxSearch, checkboxName }: FilterCheckboxTypes
): React.ReactNode => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get(checkboxSearch)
  const searchQueryArray = searchQuery?.split(',')

  const searchQueryString = searchParams.toString().replace(/\+/g, ' ').replace(/%2C/g, ',')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      if (searchQueryString.length === 0) {
        router.push(`/shop?filters=true&${checkboxSearch}=${checkboxName}`)
      } else if ((searchQueryString.length > 0) && !searchQueryString.includes(checkboxSearch)) {

        const convertQuery = searchQueryString.replace(/\+/g, ' ').replace(/%2C/g, ',')
        router.push(`/shop?${convertQuery}&${checkboxSearch}=${checkboxName}`)

      } else if (searchQueryString.includes(checkboxSearch)) {
        const nq = `${searchQuery},${checkboxName}`
        const startPos = searchQueryString.indexOf(`${checkboxSearch}=`) + `${checkboxSearch}=`.length
        let endPos = searchQueryString.indexOf("&", startPos)
        if (endPos === -1) {
          endPos = searchQueryString.length
        }
        const substringToReplace = searchQueryString.substring(startPos, endPos)
        const newSearch = searchQueryString.replace(substringToReplace, nq)
        const convertQuery = newSearch.replace(/\+/g, ' ').replace(/%2C/g, ',')

        router.push(`/shop?${convertQuery}`)

      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!searchQueryString.includes(checkboxName) && searchQueryArray?.length === 1) {
        router.push('/shop')
      } else if (searchQueryString.includes(checkboxName)) {
        const queryParams = searchQueryString.split('&')
        const subCategoryIndex = queryParams.findIndex((param) => param.startsWith(`${checkboxSearch}=`))

        if (subCategoryIndex !== -1) {
          const subCategoryValue = queryParams[subCategoryIndex].substring(`${checkboxSearch}=`.length)
          const subCategoryArray = subCategoryValue.split(',')
          const checkboxIndex = subCategoryArray.indexOf(checkboxName)
          if (checkboxIndex !== -1) {
            subCategoryArray.splice(checkboxIndex, 1)
          }
          if (subCategoryArray.length === 0) {
            queryParams.splice(subCategoryIndex, 1)
          } else {
            queryParams[subCategoryIndex] = `${checkboxSearch}=${subCategoryArray.join(',')}`
          }
          const updatedQueryString = queryParams.join('&')
          router.push(`/shop?${updatedQueryString}`)
        } else {
          router.push(`/shop?${searchQueryString}`)
        }
      }
    }
  }

  return (
    <input
      type="checkbox"
      className="sn-custom-checkbox-input"
      id={checkboxName}
      value={checkboxName}
      defaultChecked={searchQuery?.includes(checkboxName)}
      onChange={handleInputChange}
    />
  )
}

export default FilterCheckbox
