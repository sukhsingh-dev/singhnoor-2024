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
  const categoryQuery = searchParams.get(checkboxSearch)
  const categoriesArray = categoryQuery?.split(',')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (categoriesArray?.length === undefined) {
        router.push(`/en/shop?filters=true&${checkboxSearch}=${checkboxName}`)
      } else {
        router.push(`/en/shop?filters=true&${checkboxSearch}=${categoryQuery},${checkboxName}`)
      }
    } else {

      if (categoriesArray?.length === 1) {
        router.push('/en/shop')
        return
      }

      let modifiedQuery
      if ((categoryQuery?.endsWith(checkboxName)) === false) {
        modifiedQuery = categoryQuery?.replace(`${checkboxName},`, '')
      } else {
        modifiedQuery = categoryQuery?.replace(`,${checkboxName}`, '')
      }
      router.push(`/en/shop?filters=true&${checkboxSearch}=${modifiedQuery}`)
    }
  }

  return (
    <input
      type="checkbox"
      className="sn-custom-checkbox-input"
      value={checkboxId}
      defaultChecked={categoryQuery?.includes(checkboxName)}
      onChange={handleInputChange}
    />
  )
}

export default FilterCheckbox
