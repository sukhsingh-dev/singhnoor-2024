import { Heading } from "@/shared/components/ui"
import Icon from "@/shared/components/Icon"
import './style.sass'

const Contacts: React.FC = () => (
  <section className="contact-outer">
    <Heading text="CONTACTS" />
    <ul className="contact-list">
      <li className="d-flex align-center">
        <a href="tel:+918130229131" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <Icon name="call" />
          Call Us
        </a>
      </li>
      <li>
        <a href="https://wa.me/+918130229131" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <Icon name="whatsapp" />
          WhatsApp
        </a>
      </li>
      <li>
        <a href="mailto:contact@singhnoor.com" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <Icon name="gmail" />
          Mail Us
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/singhnoor.com_/" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <InstaIcon />
          Instagram
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@SinghNoor" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <Icon name="youTube" />
          YouTube
        </a>
      </li>
      <li>
        <a href="/f" className="d-flex align-center gap-16" rel="noreferrer" target="_blank">
          <Icon name="facebook" />
          Facebook
        </a>
      </li>
    </ul>
  </section>
)

const InstaIcon = (): React.ReactNode => (
  <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={60} height={60} rx={30} fill="#FAF5FC" />
    <path d="M24.6902 30.1436C24.6902 27.1278 27.1358 24.6824 30.1534 24.6824C33.171 24.6824 35.6179 27.1278 35.6179 30.1436C35.6179 33.1594 33.171 35.6048 30.1534 35.6048C27.1358 35.6048 24.6902 33.1594 24.6902 30.1436ZM21.7362 30.1436C21.7362 34.7896 25.5046 38.5558 30.1534 38.5558C34.8023 38.5558 38.5706 34.7896 38.5706 30.1436C38.5706 25.4976 34.8023 21.7315 30.1534 21.7315C25.5046 21.7315 21.7362 25.4976 21.7362 30.1436ZM36.9368 21.3979C36.9366 21.7867 37.0519 22.1669 37.2679 22.4902C37.4839 22.8136 37.791 23.0657 38.1504 23.2146C38.5097 23.3636 38.9052 23.4027 39.2868 23.327C39.6684 23.2513 40.019 23.0642 40.2942 22.7893C40.5694 22.5145 40.7569 22.1643 40.833 21.783C40.909 21.4017 40.8702 21.0064 40.7215 20.6471C40.5728 20.2878 40.3208 19.9807 39.9974 19.7646C39.674 19.5484 39.2937 19.433 38.9046 19.4328H38.9039C38.3824 19.4331 37.8823 19.6401 37.5135 20.0086C37.1447 20.377 36.9372 20.8767 36.9368 21.3979ZM23.531 43.4785C21.9328 43.4057 21.0642 43.1397 20.4869 42.9149C19.7216 42.6171 19.1755 42.2625 18.6014 41.6895C18.0273 41.1165 17.6719 40.5713 17.3753 39.8065C17.1502 39.2298 16.884 38.3614 16.8114 36.7642C16.7319 35.0374 16.716 34.5186 16.716 30.1437C16.716 25.7689 16.7332 25.2516 16.8114 23.5233C16.8841 21.9261 17.1523 21.0594 17.3753 20.481C17.6732 19.7162 18.0281 19.1704 18.6014 18.5967C19.1747 18.0229 19.7203 17.6677 20.4869 17.3713C21.0639 17.1464 21.9328 16.8803 23.531 16.8077C25.2589 16.7283 25.7779 16.7124 30.1534 16.7124C34.529 16.7124 35.0485 16.7296 36.7779 16.8077C38.376 16.8804 39.2432 17.1485 39.822 17.3713C40.5873 17.6677 41.1333 18.0237 41.7075 18.5967C42.2816 19.1696 42.6356 19.7162 42.9336 20.481C43.1586 21.0577 43.4248 21.9261 43.4975 23.5233C43.577 25.2516 43.5928 25.7689 43.5928 30.1437C43.5928 34.5186 43.577 35.0359 43.4975 36.7642C43.4247 38.3614 43.1572 39.2295 42.9336 39.8065C42.6356 40.5713 42.2808 41.117 41.7075 41.6895C41.1341 42.262 40.5873 42.6171 39.822 42.9149C39.2449 43.1398 38.376 43.4059 36.7779 43.4785C35.05 43.5579 34.5309 43.5737 30.1534 43.5737C25.7759 43.5737 25.2583 43.5579 23.531 43.4785ZM23.3953 13.8604C21.6502 13.9399 20.4578 14.2164 19.4164 14.6214C18.3379 15.0396 17.425 15.6006 16.5126 16.511C15.6003 17.4213 15.0403 18.3352 14.6219 19.413C14.2167 20.4544 13.94 21.6455 13.8605 23.3895C13.7797 25.1362 13.7612 25.6947 13.7612 30.1436C13.7612 34.5925 13.7797 35.151 13.8605 36.8977C13.94 38.6419 14.2167 39.8328 14.6219 40.8742C15.0403 41.9514 15.6004 42.8663 16.5126 43.7762C17.4248 44.6862 18.3379 45.2465 19.4164 45.6658C20.4597 46.0708 21.6502 46.3474 23.3953 46.4268C25.144 46.5062 25.7018 46.526 30.1534 46.526C34.605 46.526 35.1638 46.5075 36.9116 46.4268C38.6568 46.3474 39.8484 46.0708 40.8905 45.6658C41.9683 45.2465 42.8819 44.6866 43.7942 43.7762C44.7066 42.8659 45.2653 41.9514 45.685 40.8742C46.0902 39.8328 46.3682 38.6417 46.4464 36.8977C46.5258 35.1497 46.5443 34.5925 46.5443 30.1436C46.5443 25.6947 46.5258 25.1362 46.4464 23.3895C46.3669 21.6453 46.0902 20.4538 45.685 19.413C45.2653 18.3358 44.7051 17.4228 43.7942 16.511C42.8834 15.5992 41.9683 15.0396 40.8918 14.6214C39.8484 14.2164 38.6567 13.9386 36.9129 13.8604C35.1651 13.781 34.6063 13.7612 30.1547 13.7612C25.7031 13.7612 25.144 13.7797 23.3953 13.8604Z" fill="url(#paint0_radial_423_2872)" />
    <path d="M24.6902 30.1436C24.6902 27.1278 27.1358 24.6824 30.1534 24.6824C33.171 24.6824 35.6179 27.1278 35.6179 30.1436C35.6179 33.1594 33.171 35.6048 30.1534 35.6048C27.1358 35.6048 24.6902 33.1594 24.6902 30.1436ZM21.7362 30.1436C21.7362 34.7896 25.5046 38.5558 30.1534 38.5558C34.8023 38.5558 38.5706 34.7896 38.5706 30.1436C38.5706 25.4976 34.8023 21.7315 30.1534 21.7315C25.5046 21.7315 21.7362 25.4976 21.7362 30.1436ZM36.9368 21.3979C36.9366 21.7867 37.0519 22.1669 37.2679 22.4902C37.4839 22.8136 37.791 23.0657 38.1504 23.2146C38.5097 23.3636 38.9052 23.4027 39.2868 23.327C39.6684 23.2513 40.019 23.0642 40.2942 22.7893C40.5694 22.5145 40.7569 22.1643 40.833 21.783C40.909 21.4017 40.8702 21.0064 40.7215 20.6471C40.5728 20.2878 40.3208 19.9807 39.9974 19.7646C39.674 19.5484 39.2937 19.433 38.9046 19.4328H38.9039C38.3824 19.4331 37.8823 19.6401 37.5135 20.0086C37.1447 20.377 36.9372 20.8767 36.9368 21.3979ZM23.531 43.4785C21.9328 43.4057 21.0642 43.1397 20.4869 42.9149C19.7216 42.6171 19.1755 42.2625 18.6014 41.6895C18.0273 41.1165 17.6719 40.5713 17.3753 39.8065C17.1502 39.2298 16.884 38.3614 16.8114 36.7642C16.7319 35.0374 16.716 34.5186 16.716 30.1437C16.716 25.7689 16.7332 25.2516 16.8114 23.5233C16.8841 21.9261 17.1523 21.0594 17.3753 20.481C17.6732 19.7162 18.0281 19.1704 18.6014 18.5967C19.1747 18.0229 19.7203 17.6677 20.4869 17.3713C21.0639 17.1464 21.9328 16.8803 23.531 16.8077C25.2589 16.7283 25.7779 16.7124 30.1534 16.7124C34.529 16.7124 35.0485 16.7296 36.7779 16.8077C38.376 16.8804 39.2432 17.1485 39.822 17.3713C40.5873 17.6677 41.1333 18.0237 41.7075 18.5967C42.2816 19.1696 42.6356 19.7162 42.9336 20.481C43.1586 21.0577 43.4248 21.9261 43.4975 23.5233C43.577 25.2516 43.5928 25.7689 43.5928 30.1437C43.5928 34.5186 43.577 35.0359 43.4975 36.7642C43.4247 38.3614 43.1572 39.2295 42.9336 39.8065C42.6356 40.5713 42.2808 41.117 41.7075 41.6895C41.1341 42.262 40.5873 42.6171 39.822 42.9149C39.2449 43.1398 38.376 43.4059 36.7779 43.4785C35.05 43.5579 34.5309 43.5737 30.1534 43.5737C25.7759 43.5737 25.2583 43.5579 23.531 43.4785ZM23.3953 13.8604C21.6502 13.9399 20.4578 14.2164 19.4164 14.6214C18.3379 15.0396 17.425 15.6006 16.5126 16.511C15.6003 17.4213 15.0403 18.3352 14.6219 19.413C14.2167 20.4544 13.94 21.6455 13.8605 23.3895C13.7797 25.1362 13.7612 25.6947 13.7612 30.1436C13.7612 34.5925 13.7797 35.151 13.8605 36.8977C13.94 38.6419 14.2167 39.8328 14.6219 40.8742C15.0403 41.9514 15.6004 42.8663 16.5126 43.7762C17.4248 44.6862 18.3379 45.2465 19.4164 45.6658C20.4597 46.0708 21.6502 46.3474 23.3953 46.4268C25.144 46.5062 25.7018 46.526 30.1534 46.526C34.605 46.526 35.1638 46.5075 36.9116 46.4268C38.6568 46.3474 39.8484 46.0708 40.8905 45.6658C41.9683 45.2465 42.8819 44.6866 43.7942 43.7762C44.7066 42.8659 45.2653 41.9514 45.685 40.8742C46.0902 39.8328 46.3682 38.6417 46.4464 36.8977C46.5258 35.1497 46.5443 34.5925 46.5443 30.1436C46.5443 25.6947 46.5258 25.1362 46.4464 23.3895C46.3669 21.6453 46.0902 20.4538 45.685 19.413C45.2653 18.3358 44.7051 17.4228 43.7942 16.511C42.8834 15.5992 41.9683 15.0396 40.8918 14.6214C39.8484 14.2164 38.6567 13.9386 36.9129 13.8604C35.1651 13.781 34.6063 13.7612 30.1547 13.7612C25.7031 13.7612 25.144 13.7797 23.3953 13.8604Z" fill="url(#paint1_radial_423_2872)" />
    <defs>
      <radialGradient id="paint0_radial_423_2872" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(18.1168 46.6808) scale(42.7973 42.7716)">
        <stop offset="0.09" stopColor="#FA8F21" />
        <stop offset="0.78" stopColor="#D82D7E" />
      </radialGradient>
      <radialGradient id="paint1_radial_423_2872" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(33.6435 48.1486) scale(33.7302 33.71)">
        <stop offset="0.64" stopColor="#8C3AAA" stopOpacity={0} />
        <stop offset={1} stopColor="#8C3AAA" />
      </radialGradient>
    </defs>
  </svg>
)

export default Contacts
