import { Heading } from "@/shared/components/ui"
import { dealsList } from "@/shared/helper/store"
import Link from "next/link"
import Image from "next/image"
import './zone.sass'

const DealsZone: React.FC = () => (
  <section className="deal-zone-outer">
    <Heading text="Deal Zone" />
    <ul className="deal-zone-list d-flex gap-16">
      {
        dealsList.map((deal) => (
          <li key={deal.price}>
            <Link href={deal.linkURL} className="d-flex flex-column align-items-center">
              <Image
                src={`/images/${deal.img}`}
                alt={`SN products under ${deal.price}`}
                width={120}
                height={120}
                quality={100}
              />
              <span className="text-primary text-center">
                Under
                <span className="product-price-currency"> ₹</span>
                {deal.price}
              </span>
            </Link>
          </li>
        ))
      }
    </ul>
  </section>
)

export default DealsZone
