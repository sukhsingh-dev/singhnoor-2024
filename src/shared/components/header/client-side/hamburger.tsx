'use client'

import { clickSound } from "@/shared/helper/functions"

const MenuButton: React.FC = () => {

  const handleMenuOpen = (): void => {
    document.querySelector('body')?.classList.toggle('overflow-hidden')
    document.querySelector('.sn-header')?.classList.toggle('menu-open')
    clickSound()
  }

  return (
    <>
      <button className="hamburger-btn" onClick={handleMenuOpen} type="button" aria-label="menu toggle" />
      <button aria-label="close menu" className="menu-close-area" onClick={handleMenuOpen} type="button" />
    </>
  )
}

export default MenuButton
