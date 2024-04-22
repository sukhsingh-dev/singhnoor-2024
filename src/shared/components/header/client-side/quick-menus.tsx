'use client'

import { type QuickMenusInnerTypes } from "@/shared/helper/types"
import { useState, useEffect, useContext } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { CartContext } from "../../context/CartContext"
import Icon from "../../Icon"

const QuickMenus = (): React.ReactNode => {
  const [settingsOpen, setSettingsOpen] = useState<true | false>(false)
  const [accountOpen, setAccountOpen] = useState<true | false>(false)
  const [scrollDown, setScrollDown] = useState(false)
  const { cartProducts, wishlistProducts } = useContext(CartContext)
  const pageName = usePathname()

  useEffect(() => {
    const animItems = document.querySelectorAll('.aos')

    const removeClasses = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('aos')
        }
      })
    }

    const observer = new IntersectionObserver(removeClasses, {
      rootMargin: "-60px 0px",
      threshold: 0.5
    })

    animItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    let prevScrollPos = window.scrollY || document.documentElement.scrollTop
    const main = document.querySelector('body')

    const handleScroll = (): void => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop
      setScrollDown(currentScrollPos > 100 && currentScrollPos > prevScrollPos)
      prevScrollPos = currentScrollPos

      if (window.scrollY > 64) {
        main?.classList.add('show-header')
      } else {
        main?.classList.remove('show-header')
      }
    }

    window.addEventListener('scroll', handleScroll)

    scrollDown ? main?.classList.add('page-down') : main?.classList.remove('page-down')

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollDown])

  return (
    <div className="sn-quick-menus">
      <ul className="quick-menus-list d-flex gap-16 justify-between">
        <li className="text-primary icon-home">
          <Link href="/">
            <Icon name="home" className={pageName === '/' ? 'text-primary' : ''} />
          </Link>
        </li>
        <li className="position-relative">
          <Link href="wishlist">
            <Icon name="bag" className={pageName === "wishlist" ? 'text-primary' : ''} />
            {
              wishlistProducts.length > 0 &&
              <span className="cart-count position-absolute d-flex align-center justify-center">{wishlistProducts.length}</span>
            }
          </Link>
        </li>
        <li className="icon-cart position-relative">
          <Link href="cart">
            <Icon name="cart" className={pageName === "cart" ? 'text-primary' : ''} />
          </Link>
          {
            cartProducts.length > 0 &&
            <span className="cart-count position-absolute d-flex align-center justify-center">{cartProducts.length}</span>
          }
        </li>
        <li className="icon-account">
          <button
            type="button"
            aria-label="toggle settings menu"
            onClick={() => setAccountOpen((prev) => !prev)}
          >
            <Icon name="person" className={accountOpen ? 'text-primary' : ''} />
          </button>
          <QuickMenuInner
            isActive={accountOpen}
            closeAction={setAccountOpen}
            menuListBody={
              <>
                <li>
                  Login
                </li>
                <li>
                  Signup
                </li>
              </>
            }
          />
        </li>
        <li className="icon-setting">
          <button
            type="button"
            aria-label="toggle settings menu"
            onClick={() => setSettingsOpen((prev) => !prev)}
          >
            <Icon name="setting" className={settingsOpen ? 'text-primary' : ''} />
          </button>
          <QuickMenuInner
            isActive={settingsOpen}
            closeAction={setSettingsOpen}
            menuListBody={
              <li>
                Theme Mode:
                <span> Light</span>
              </li>
            }
          />
        </li>
      </ul>

    </div>
  )
}

const QuickMenuInner = ({
  isActive, closeAction, menuListBody
}: QuickMenusInnerTypes): React.ReactNode => (
  <div className={`sn-quick-menus-inner ${isActive ? 'show-menu' : ''}`}>
    <div className="position-relative">
      <Icon name="modal-design" className="modal-design" />
    </div>
    <button
      className="menu-close"
      type="button"
      aria-label="close menu"
      onClick={() => closeAction(false)}
    >
      <Icon name="close" width={16} height={16} />
    </button>
    <ul className="sn-quick-menus-inner-list">
      {menuListBody}
    </ul>
  </div>
)

export default QuickMenus
