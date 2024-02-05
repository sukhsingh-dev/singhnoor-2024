import Icon from "../Icon"
import './style.sass'

const Footer: React.FC = () => (
  <footer className="sn-footer">
    <ul className="footer-list d-flex gap-16 justify-between">
      <li className="text-primary">
        <Icon name="home" />
      </li>
      <li>
        <Icon name="bag" />
      </li>
      <li className="position-relative">
        <Icon name="cart" />
        <span className="cart-count position-absolute d-flex align-center justify-center">3</span>
      </li>
      <li>
        <Icon name="person" />
      </li>
      <li>
        <Icon name="setting" />
      </li>
    </ul>
  </footer>
)

export default Footer
