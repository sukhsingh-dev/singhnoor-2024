'use client'

import Icon from "../../Icon"

const ScrollToTop: React.FC = () => {
  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      type="button"
      aria-label="Go to top"
      className="btn btn-primary scroll-to-top"
      onClick={handleClick}
    >
      <Icon name="chevron-up" />
    </button>
  )
}

export default ScrollToTop
