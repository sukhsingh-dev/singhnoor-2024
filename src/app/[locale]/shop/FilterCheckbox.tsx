'use client'

import { useRouter, useSearchParams } from "next/navigation"

interface FilterCheckboxTypes {
  checkboxId: string
  checkboxName: string
  isDefaultChecked: boolean | undefined
}

const FilterCheckbox = (
  { checkboxId, checkboxName, isDefaultChecked }: FilterCheckboxTypes
): React.ReactNode => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryQuery = searchParams.get("category")
  const categoriesArray = categoryQuery?.split(',')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (categoriesArray?.length === undefined) {
        router.push(`/en/shop?filters=true&category=${checkboxName}`)
      } else {
        router.push(`/en/shop?filters=true&category=${categoryQuery},${checkboxName}`)
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
      router.push(`/en/shop?filters=true&category=${modifiedQuery}`)
    }
  }

  return (
    <input
      type="checkbox"
      className="sn-custom-checkbox-input"
      value={checkboxId}
      defaultChecked={isDefaultChecked}
      onChange={handleInputChange}
    />
  )
}

export default FilterCheckbox
