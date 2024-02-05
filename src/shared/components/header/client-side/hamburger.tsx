'use client'

const MenuIcon = (): React.ReactNode => (
  <svg width={30} height={30} viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={30} height={3} rx="1.5" fill="#333333" />
    <rect y={11} width={20} height={3} rx="1.5" fill="#333333" />
  </svg>
)

const MenuButton: React.FC = () => {

  const handleMenuOpen = (): void => {
    document.querySelector('body')?.classList.toggle('overflow-hidden')
    document.querySelector('.sn-header')?.classList.toggle('menu-open')
  }

  return (
    <>
      <button className="hamburger-btn" onClick={handleMenuOpen} type="button" aria-label="menu toggle">
        <MenuIcon />
      </button>
      <button aria-label="close menu" className="menu-close-area" onClick={handleMenuOpen} type="button" />
    </>
  )
}

export default MenuButton
