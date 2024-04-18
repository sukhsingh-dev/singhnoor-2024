'use client'

import { type LanguageChangeActionTypes, type QuickMenusTypes } from "@/shared/helper/types"
import { useState, useEffect, useTransition, useContext } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from "next-intl"
import Link from "next/link"
import { CartContext } from "../../context/CartContext"
import Icon from "../../Icon"

const QuickMenus = ({ langText, currentLang }: QuickMenusTypes): React.ReactNode => {
  const [settingsOpen, setSettingsOpen] = useState<true | false>(false)
  const [languageOpen, setLanguageOpen] = useState<true | false>(false)
  const [accountOpen, setAccountOpen] = useState<true | false>(false)
  const [scrollDown, setScrollDown] = useState(false)
  const { cartProducts, wishlistProducts } = useContext(CartContext)
  const pageName = usePathname()
  const lang = useLocale()

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

    // eslint-disable-next-line no-unused-expressions
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
        <li>
          <Link href={`/${lang}/wishlist`}>
            <Icon name="bag" className={pageName === `/${lang}/wishlist` ? 'text-primary' : ''} />
            {
              wishlistProducts.length > 0 &&
              <span className="cart-count position-absolute d-flex align-center justify-center">{wishlistProducts.length}</span>
            }
          </Link>
        </li>
        <li className="icon-cart position-relative">
          <Link href={`/${lang}/cart`}>
            <Icon name="cart" className={pageName === `/${lang}/cart` ? 'text-primary' : ''} />
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
                <button
                  type="submit"
                  onClick={() => setLanguageOpen((prev) => !prev)}
                >
                  {langText}
                  :&nbsp;
                  <span>{currentLang}</span>
                </button>
                <div className={`sn-quick-menus-inner lang-menu-inner ${languageOpen ? 'show-menu' : ''}`}>
                  <div className="sn-quick-menus-close">
                    <button
                      type="button"
                      aria-label="close menu"
                      onClick={() => setLanguageOpen(false)}
                    >
                      <Icon name="close" />
                    </button>
                  </div>
                  <ul className="sn-quick-menus-inner-list">
                    <li>
                      <LanguageChangeAction lang="en" name="English" />
                    </li>
                    <li>
                      <LanguageChangeAction lang="hi" name="हिंदी" />
                    </li>
                    <li>
                      <LanguageChangeAction lang="pu" name="ਪੰਜਾਬੀ" />
                    </li>
                  </ul>
                </div>
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

const LanguageChangeAction = ({ lang, name }: LanguageChangeActionTypes): React.ReactNode => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pName = usePathname()

  const getTextAfterSecondSlash = (inputText: string): string | null => {
    const firstSlashIndex = inputText.indexOf('/')

    if (firstSlashIndex === -1 || firstSlashIndex === inputText.length - 1) {
      return null
    }
    const secondSlashIndex = inputText.indexOf('/', firstSlashIndex + 1)
    if (secondSlashIndex === -1) {
      return null
    }
    const textAfterSecondSlash = inputText.substring(secondSlashIndex + 1)
    return textAfterSecondSlash
  }

  const redirectPath = getTextAfterSecondSlash(pName)

  const handleClick = (): void => {
    startTransition(() => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!redirectPath) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.replace(`/${lang}`)
      } else {
        router.replace(`/${lang}/${redirectPath}`)
      }
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
    >
      {name}
    </button>
  )
}

export default QuickMenus
