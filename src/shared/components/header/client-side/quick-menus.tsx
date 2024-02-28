'use client'

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import Icon from "../../Icon"

const QuickMenus: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState<true | false>(false)
  const [accountOpen, setAccountOpen] = useState<true | false>(false)
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
  }, [])

  return (
    <div className="sn-quick-menus">
      <ul className="quick-menus-list d-flex gap-16 justify-between container">
        <li className="text-primary icon-home">
          <Link href="/">
            <Icon name="home" className={pageName === '/' ? 'text-primary' : ''} />
          </Link>
        </li>
        <li>
          <Link href="/wishlist">
            <Icon name="bag" className={pageName === '/wishlist' ? 'text-primary' : ''} />
          </Link>
        </li>
        <li className="icon-cart position-relative">
          <Link href="/cart">
            <Icon name="cart" className={pageName === '/cart' ? 'text-primary' : ''} />
          </Link>
          <span className="cart-count position-absolute d-flex align-center justify-center">3</span>
        </li>
        <li className="icon-account">
          <button
            type="button"
            aria-label="toggle settings menu"
            onClick={() => setAccountOpen((prev) => !prev)}
          >
            <Icon name="person" className={accountOpen ? 'text-primary' : ''} />
          </button>
          <div className={`sn-quick-menus-inner ${accountOpen ? 'show-menu' : ''}`}>
            <div className="sn-quick-menus-close">
              <button
                type="button"
                aria-label="close menu"
                onClick={() => setAccountOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>
            <ul className="sn-quick-menus-inner-list">
              <li>
                Login
              </li>
              <li>
                Signup
              </li>
            </ul>
          </div>
        </li>
        <li className="icon-setting">
          <button
            type="button"
            aria-label="toggle settings menu"
            onClick={() => setSettingsOpen((prev) => !prev)}
          >
            <Icon name="setting" className={settingsOpen ? 'text-primary' : ''} />
          </button>
          <div className={`sn-quick-menus-inner ${settingsOpen ? 'show-menu' : ''}`}>
            <div className="sn-quick-menus-close">
              <button
                type="button"
                aria-label="close menu"
                onClick={() => setSettingsOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>
            <ul className="sn-quick-menus-inner-list">
              <li>
                Language:
                <span> Eng</span>
              </li>
              <li>
                Theme Mode:
                <span> Light</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default QuickMenus
