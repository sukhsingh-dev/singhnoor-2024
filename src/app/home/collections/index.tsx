import { Heading } from "@/shared/components/ui"
import Link from "next/link"
import Image from "next/image"
import './style.sass'

const Collections: React.FC = () => (
  <section>
    <Heading text="NEW COLLECTION" />
    <div className="for-sec-outer position-relative aos">
      <h4 className="position-absolute">For Men</h4>
      <Image src="/images/for-men.webp" alt="sn products for men" loading="lazy" width={363} height={390} />
      <Link href="men" className="btn btn-primary btn-arrow-long align-center position-relative">Explore</Link>
    </div>

    <div className="for-sec-outer for-sec-women text-right position-relative aos">
      <h4 className="position-absolute text-left">For Women</h4>
      <Image src="/images/for-women.webp" alt="sn products for men" loading="lazy" width={363} height={390} />
      <Link href="men" className="btn btn-primary btn-arrow-long align-center position-relative">Explore</Link>
    </div>

    <div className="for-sec-outer for-sec-kids position-relative aos">
      <h4 className="position-absolute">For Kids</h4>
      <Image src="/images/for-kids.webp" alt="sn products for men" loading="lazy" width={363} height={390} />
      <Link href="men" className="btn btn-primary btn-arrow-long align-center position-relative">Explore</Link>
    </div>
  </section>
)

export default Collections
