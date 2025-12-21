import Link from "next/link"
import Image from "next/image"
import QuickMenus from "./client-side/quick-menus"
import './header.sass'
import Sidebar from "./sidebar"

const Header: React.FC = () => (
  <header className="sn-header">
    <div className="sn-header-inner d-flex align-center justify-between">
      <button
        className="hamburger-btn"
        type="button"
        aria-label="menu toggle"
        data-has-click="true"
        data-class-target="sn-header"
        data-class-applied="menu-open"
        data-body-overflow-hidden="true"
        data-sound-click="true"
      />
      <Link href="/" className="logo-icon">
        <Image
          alt="singhnoor logo"
          src="/images/sn-logo.webp"
          width={130}
          height={40}
          quality={100}
        />
      </Link>
      <div className="sn-header-side-options">
        <QuickMenus />
        <button
          type="button"
          aria-label="close menu"
          className="magic-icon-search"
          data-has-click="true"
          data-class-target="sn-header"
          data-class-applied="show-search"
          data-body-overflow-hidden="true"
          data-sound-click="true"
        />
        <div className="search-wrapper">
          <input type="search" placeholder="Search..." className="header-search" />
        </div>
      </div>
    </div>
    <Sidebar />
  </header>
)

export default Header
