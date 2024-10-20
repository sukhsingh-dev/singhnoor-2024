'use client'

import { useState } from "react"
import { clickSound } from "@/shared/helper/functions"

const SearchField: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const handleSearch = (): void => {
    setSearchOpen((prev) => !prev)
    clickSound()
    document.querySelector('.sn-header')?.classList.toggle('show-search')
  }
  return (
    <>
      <button
        type="button"
        aria-label="close menu"
        className={`magic-icon-search ${searchOpen ? 'close' : ''}`}
        onClick={handleSearch}
      />
      <div className={`search-wrapper ${searchOpen ? 'search-visible' : ''}`}>
        <input placeholder="Search..." className="header-search" />
      </div>
    </>
  )
}

export default SearchField
