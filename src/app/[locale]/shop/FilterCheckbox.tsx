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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (searchQueryArray?.length === undefined) {
        router.push(`/en/shop?filters=true&${checkboxSearch}=${checkboxName}`)
      } else {
        router.push(`/en/shop?filters=true&${checkboxSearch}=${searchQuery},${checkboxName}`)
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
