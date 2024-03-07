import { menuList } from "@/shared/helper/store"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import MenuButton from "./client-side/hamburger"
import SearchField from "./client-side/search"
import QuickMenus from "./client-side/quick-menus"
import './header.sass'

const Header: React.FC = () => {
  const t = useTranslations("Lang")
  return (
    <header className="sn-header">
      <div className="sn-header-inner d-flex align-center justify-between">
        <MenuButton />
        <nav className="sn-menu">
          <ul>
            {
              menuList.map((menu) => (
                <li key={menu.category}>
                  <label htmlFor={`${menu.category}-submenu`} className="sn-menu-label d-flex align-center justify-between arrow-icon">
                    {menu.category}
                  </label>
                  <input type="radio" id={`${menu.category}-submenu`} name="submenu" className="submenu-input" />
                  <div className="submenu-outer">
                    <ul>
                      {
                        menu.subcategories.map((item) => (
                          <li key={item.link}>
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))
                      }
                      <li className="bg-light">
                        <label htmlFor="no-submenu" className="arrow-icon back-arrow align-center">
                          Back
                        </label>
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            }
            <li>
              <input type="radio" id="no-submenu" name="submenu" className="submenu-input" />
              <label className="sn-menu-label d-flex">
                <Link href="/contact">
                  Contact Us
                </Link>
              </label>
            </li>
            <li className="btn-link-outer">
              <Link className="btn btn-primary" href="/create">Create My Own</Link>
            </li>
          </ul>
        </nav>
        <Link href="/" className="logo-icon">
          <Image
            alt="singhnoor logo"
            src="/images/sn-black-logo.webp"
            width={60}
            height={40}
            quality={100}
          />
        </Link>
        <div className="sn-header-side-options">
          <QuickMenus
            langText={t('changeLang')}
            currentLang={t('currentLang')}
          />
          <SearchField />
        </div>
      </div>
    </header>
  )
}

export default Header
