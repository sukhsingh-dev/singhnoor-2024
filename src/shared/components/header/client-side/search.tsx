'use client'

import { useState } from "react"

const SearchField: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="close menu"
        className={`magic-icon-search ${searchOpen ? 'close' : ''}`}
        onClick={() => { setSearchOpen((prev) => !prev) }}
      />
      <div className={`search-wrapper ${searchOpen ? 'search-visible' : ''}`}>
        <input placeholder="Search..." className="header-search" />
      </div>
    </>
  )
}

export default SearchField
