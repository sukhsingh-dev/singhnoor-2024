import Link from "next/link"
import Icon from "../Icon"

const Sidebar = (): React.ReactNode => {
  return (
    <>
      <div className="sn-sidebar">
        <ul className="sn-siderbar-list">
          <li>
            <details className="sn-sidebar-details">
              <summary>Men</summary>
              <ul className="sn-list-inner">
                <li>
                  <Link href="/shop?filters=true&Gender=Men&subCategory=T-shirts" className="sn-sidebar-link">T-shirts</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Men&category=Leather%20Gatra" className="sn-sidebar-link">Leather Gatra</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Men&category=Fabric%20Gatra" className="sn-sidebar-link">Fabric Gatra</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Men&subCategory=Tracksuit" className="sn-sidebar-link">Tracksuit</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="sn-sidebar-details">
              <summary>Women</summary>
              <ul className="sn-list-inner">
                <li>
                  <Link href="/shop?filters=true&Gender=Women&subCategory=T-shirts" className="sn-sidebar-link">T-shirts</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Women&category=Leather%20Gatra" className="sn-sidebar-link">Leather Gatra</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Women&category=Fabric%20Gatra" className="sn-sidebar-link">Fabric Gatra</Link>
                </li>
                <li>
                  <Link href="/shop?filters=true&Gender=Women&subCategory=Tracksuit" className="sn-sidebar-link">Tracksuit</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="sn-sidebar-details">
              <summary>Kids</summary>
              <ul className="sn-list-inner">
                <li>
                  <Link href="/shop?filters=true&category=Kaur%20Accessories" className="sn-sidebar-link">Kaur Accessories</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="sn-sidebar-details">
              <summary>More</summary>
              <ul className="sn-list-inner">
                <li>
                  <Link href="/user-profile" className="sn-sidebar-link">My Account</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="sn-sidebar-link">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="sn-sidebar-link">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="sn-sidebar-link">T&C</Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="sn-sidebar-link">FAQs</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="sn-sidebar-details sn-sidebar-details--link">
            <Link href="/shop" className="sn-sidebar-link">Shop All</Link>
          </li>
        </ul>
        <Link href="/customize-your-own" className="btn btn-primary">
          <Icon name="pen" />
          Create Your Own
        </Link>
      </div>
      <button
        type="button"
        aria-label="close sidebar"
        className="sn-sidebar-close-btn"
        data-has-click="true"
        data-class-target="sn-header"
        data-class-applied="menu-open"
        data-body-overflow-hidden="true"
      />
    </>
  )
}

export default Sidebar
