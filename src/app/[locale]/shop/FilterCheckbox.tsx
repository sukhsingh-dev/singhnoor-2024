'use client'

import { useRouter, useSearchParams } from "next/navigation"

interface FilterCheckboxTypes {
  checkboxSearch: string
  checkboxId: string
  checkboxName: string
}

const FilterCheckbox = (
  { checkboxSearch, checkboxId, checkboxName }: FilterCheckboxTypes
): React.ReactNode => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get(checkboxSearch)
  const searchQueryArray = searchQuery?.split(',')

  const searchQueryString = searchParams.toString()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!searchQueryString) {
        router.push(`/en/shop?filters=true&${checkboxSearch}=${checkboxName}`)
      } else if ((searchQueryString.length > 0) && !searchQueryString.includes(checkboxSearch)) {
        router.push(`/en/shop?${decodeURIComponent(searchQueryString)}&${checkboxSearch}=${checkboxName}`)
      } else if (searchQueryString.includes(checkboxSearch)) {
        const nq = `${searchQuery},${checkboxName}`
        const startPos = searchQueryString.indexOf(`${checkboxSearch}=`) + `${checkboxSearch}=`.length
        let endPos = searchQueryString.indexOf("&", startPos)
        if (endPos === -1) {
          endPos = searchQueryString.length
        }
        const substringToReplace = searchQueryString.substring(startPos, endPos)
        const newSearch = searchQueryString.replace(substringToReplace, nq)
        router.push(`/en/shop?${decodeURIComponent(newSearch)}`)
      }
    } else {

      if (searchQueryArray?.length === 1) {
        router.push('/en/shop')
        return
      }

      let modifiedQuery
      if ((searchQuery?.endsWith(checkboxName)) === false) {
        modifiedQuery = searchQuery?.replace(`${checkboxName},`, '')
      } else {
        modifiedQuery = searchQuery?.replace(`,${checkboxName}`, '')
      }
      router.push(`/en/shop?filters=true&${checkboxSearch}=${modifiedQuery}`)
    }
  }

  return (
    <input
      type="checkbox"
      className="sn-custom-checkbox-input"
      value={checkboxId}
      defaultChecked={searchQuery?.includes(checkboxName)}
      onChange={handleInputChange}
    />
  )
}

export default FilterCheckbox
