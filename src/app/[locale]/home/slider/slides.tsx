import Link from "next/link"
import Image from "next/image"
import StoreBtn from "@/shared/components/storeBtn/StoreBtn"

export const Slide2: React.FC = () => (
  <>
    <h1 className="slider-heading">
      SUMMER
      <span className="text-primary"> COLLECTION </span>
      <br />
      FOR
      <span className="text-secondary"> GIRLS</span>
    </h1>
    <div className="text-center slider-img-outer">
      <div className="slider-img-main">
        <Image
          src="/images/slides/slide-1/slide-1-main.webp"
          alt="girl wearing printed t-shirt"
          width={340}
          height={380}
          quality={100}
          className="slider-img"
        />
      </div>
      <div className="slide-offer">
        <span className="text-primary">25% </span>
        <span className="text-secondary">OFF </span>
      </div>
      <div className="slider-img-lg">
        <div className="slider-img-lg-left">
          <Image
            src="/images/slides/slide-1/slide-1-left.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
        <div className="slider-img-lg-right">
          <Image
            src="/images/slides/slide-1/slide-1-right.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
      </div>
    </div>
    <div className="d-flex justify-center gap-16 slider-action-btns">
      <Link href="/" className="btn btn-primary">Buy Now</Link>
      <Link href="/" className="btn btn-secondary">Know More</Link>
    </div>
  </>
)

export const Slide3: React.FC = () => (
  <>
    <h1 className="slider-heading">
      PREMIUM
      <span className="text-primary"> QUALITY </span>
      <br />
      LEATHER
      <span className="text-secondary"> BAG</span>
    </h1>
    <Link href="/en/product/6609525d9458ffdc4a9513ea" className="text-center slider-img-outer">
      <div className="slider-img-main">
        <Image
          src="/images/slides/slide-2/slide-2-main.webp"
          alt="man with Leather bag"
          width={340}
          height={380}
          quality={100}
          className="slider-img"
        />
      </div>
      <div className="slide-offer">
        <span className="text-primary">15% </span>
        <span className="text-secondary">OFF </span>
      </div>
      <div className="slider-img-lg">
        <div className="slider-img-lg-left">
          <Image
            src="/images/slides/slide-2/slide-2-left.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
        <div className="slider-img-lg-right">
          <Image
            src="/images/slides/slide-2/slide-2-right.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
      </div>
    </Link>
    <div className="d-flex justify-center gap-16 slider-action-btns">
      <StoreBtn
        storeName="sn-cart"
        btnClasses="btn btn-primary"
        productInfo={{ _id: "6609525d9458ffdc4a9513ea", category: "Leather Bag" }}
      />
      <Link href="/en/product/6609525d9458ffdc4a9513ea" className="btn btn-secondary btn-arrow-long align-center">Know More</Link>
    </div>
  </>
)

export const Slide1: React.FC = () => (
  <>
    <h1 className="slider-heading">
      HIGH
      <span className="text-primary"> QUALITY</span>
      <br />
      DESIGNER
      <span className="text-secondary"> GATARAS</span>
    </h1>
    <Link href="/en/product/6607992dc663e6e0182e0a45" className="text-center slider-img-outer">
      <div className="slider-img-main">
        <Image
          src="/images/slides/slide-3/slide-3-main.webp"
          alt="Sikh man wearing custom made gatara"
          width={340}
          height={380}
          quality={100}
          className="slider-img"
        />
      </div>
      <div className="slide-offer">
        <span className="text-primary">10% </span>
        <span className="text-secondary">OFF </span>
      </div>
      <div className="slider-img-lg">
        <div className="slider-img-lg-left">
          <Image
            src="/images/slides/slide-3/slide-3-left.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
        <div className="slider-img-lg-right">
          <Image
            src="/images/slides/slide-3/slide-3-right.webp"
            alt="man with Leather bag"
            width={180}
            height={180}
            quality={100}
          />
        </div>
      </div>
    </Link>
    <div className="d-flex justify-center gap-16 slider-action-btns">
      <StoreBtn
        storeName="sn-cart"
        btnClasses="btn btn-primary"
        productInfo={{ _id: "6607992dc663e6e0182e0a45", category: "Gatra" }}
      />
      <Link href="/en/product/6607992dc663e6e0182e0a45" className="btn btn-secondary btn-arrow-long align-center">Know More</Link>
    </div>
  </>
)
