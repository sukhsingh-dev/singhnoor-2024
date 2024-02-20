import Icon from "../../Icon"

const QuickMenus: React.FC = () => (
  <div className="sn-quick-menus">
    <ul className="quick-menus-list d-flex gap-16 justify-between container">
      <li className="text-primary icon-home">
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
      <li className="icon-setting">
        <Icon name="setting" />
      </li>
    </ul>
  </div>
)

export default QuickMenus
