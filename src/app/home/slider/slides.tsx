import Link from "next/link"
import Image from "next/image"

export const Slide1: React.FC = () => (
  <>
    <h1 className="slider-heading">
      SUMMER
      <span className="text-primary"> COLLECTION </span>
      <br />
      FOR
      <span className="text-secondary"> GIRLS</span>
    </h1>
    <div className="text-center">
      <Image
        src="/images/slide-1.webp"
        alt="girl wearing printed t-shirt"
        width={340}
        height={380}
        className="slider-img"
      />
    </div>
    <div className="d-flex justify-center gap-16">
      <Link href="/" className="btn btn-primary">Buy Now</Link>
      <Link href="/" className="btn btn-secondary">Know More</Link>
    </div>
  </>
)

export const Slide2: React.FC = () => (
  <>
    <h1 className="slider-heading">
      PREMIUM
      <span className="text-primary"> QUALITY </span>
      <br />
      LEATHER
      <span className="text-secondary"> BAG</span>
    </h1>
    <div className="text-center">
      <Image
        src="/images/slide-2.webp"
        alt="man with Leather bag"
        width={340}
        height={380}
        className="slider-img"
        loading="lazy"
      />
    </div>
    <div className="d-flex justify-center gap-16">
      <Link href="/" className="btn btn-primary">Buy Now</Link>
      <Link href="/" className="btn btn-secondary">Know More</Link>
    </div>
  </>
)

export const Slide3: React.FC = () => (
  <>
    <h1 className="slider-heading">
      HIGH
      <span className="text-primary"> QUALITY</span>
      <br />
      DESIGNER
      <span className="text-secondary"> GATARAS</span>
    </h1>
    <div className="text-center">
      <Image
        src="/images/slide-3.webp"
        alt="Sikh man wearing custom made gatara"
        width={340}
        height={380}
        className="slider-img"
        loading="lazy"
      />
    </div>
    <div className="d-flex justify-center gap-16">
      <Link href="/" className="btn btn-primary">Buy Now</Link>
      <Link href="/" className="btn btn-secondary">Know More</Link>
    </div>
  </>
)
