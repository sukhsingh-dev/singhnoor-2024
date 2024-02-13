import { Heading, TextDecorator } from "@/shared/components/ui"
import Image from "next/image"
import './style.sass'

const TodayDeal: React.FC = () => (
  <section className="text-center deals-outer">
    <Heading text="TODAY'S DEAL" />
    <div className="position-relative deals-offer">
      <div className="deals-bg-decorator" style={{ backgroundColor: '#F7DACA' }} />
      <div className="t-shirts-set position-absolute">
        <Image src="/images/t-shirts/t-3.webp" alt="" loading="lazy" width={210} height={210} />
        <Image src="/images/t-shirts/t-2.webp" alt="" loading="lazy" width={250} height={250} />
        <Image src="/images/t-shirts/t-4.webp" alt="" loading="lazy" width={210} height={210} />
      </div>
    </div>
    <h3 className="text-secondary deal-text position-relative">
      3 Set of T-shirts at
      <span className="product-price-currency"> ₹</span>
      999 Only
    </h3>
    <TextDecorator color="#F7DACA" />
    <div className="deal-btn-outer">
      <a href="/" className="btn btn-primary">Buy Now</a>
    </div>
  </section>
)

export default TodayDeal
