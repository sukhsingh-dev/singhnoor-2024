'use client'

import { Heading } from "@/shared/components/ui"
import { useState, useRef, useEffect } from "react"
import Icon from "@/shared/components/Icon"
import Image from "next/image"
import ProductCard from "@/shared/components/ui/productCard"
import './looks.sass'

interface GetTheLookProps {
  heading: string
}

const GetTheLook: React.FC<GetTheLookProps> = ({ heading }: GetTheLookProps) => {
  const imgBox = useRef<HTMLDivElement>(null)
  const [imgNotHover, setImgHover] = useState<true | false>(true)
  const interval = useRef<NodeJS.Timeout>()

  const handleHoverOver = (state: boolean): void => {
    setImgHover(state)
  }

  const resetInterval = (): void => {
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      handleNext()
    }, 3000)
  }

  const handleNext = (): void => {
    if (imgBox.current != null && imgNotHover) {
      document.querySelector('.sn-gtl-item.active')?.classList.remove('active')
      imgBox.current.prepend(imgBox.current.children[4])
      document.querySelector('.sn-gtl-item:nth-child(3)')?.classList.add('active')
      imgBox.current.classList.remove('sn-gtl-animation-backward')
      imgBox.current.classList.remove('sn-gtl-animation') // in case of multiple clicks
      imgBox.current.classList.add('sn-gtl-animation')
      setTimeout(() => {
        imgBox.current?.classList.remove('sn-gtl-animation')
      }, 2500)
    }
    resetInterval()
  }

  const handlePrev = (): void => {
    resetInterval()
    document.querySelector('.sn-gtl-item.active')?.classList.remove('active')
    imgBox.current?.appendChild(imgBox.current.children[0])
    document.querySelector('.sn-gtl-item:nth-child(3)')?.classList.add('active')
    imgBox.current?.classList.remove('sn-gtl-animation')
    imgBox.current?.classList.remove('sn-gtl-animation-backward') // in case of multiple clicks
    imgBox.current?.classList.add('sn-gtl-animation-backward')
    setTimeout(() => {
      imgBox.current?.classList.remove('sn-gtl-animation-backward')
    }, 2500)
  }

  useEffect(() => {
    resetInterval()

    return () => {
      clearInterval(interval.current)
    }
  }, [imgNotHover])

  return (
    <section className="sn-gtl position-relative">
      <Heading text={heading} />
      <div className="sn-gtl-btns">
        <button
          type="button"
          aria-label="go back"
          className="btn btn-primary btn-round btn-prev"
          onClick={handlePrev}
        >
          <Icon name="chevron-up" />
        </button>
        <button
          type="button"
          aria-label="go back"
          className="btn btn-primary btn-round btn-next"
          onClick={handleNext}
        >
          <Icon name="chevron-up" />
        </button>
      </div>
      <div
        className="sn-gtl-list"
        ref={imgBox}
      >
        <GtlItem imgURL="gtl-5.webp" gtlProducts={gtlProduct1} handleHover={handleHoverOver} />
        <GtlItem imgURL="gtl-4-1.webp" gtlProducts={gtlProduct1} handleHover={handleHoverOver} />
        <GtlItem imgURL="gtl-1.webp" gtlProducts={gtlProduct2} handleHover={handleHoverOver} isActive />
        <GtlItem imgURL="gtl-2.webp" gtlProducts={gtlProduct1} handleHover={handleHoverOver} />
        <GtlItem imgURL="gtl-3.webp" gtlProducts={gtlProduct1} handleHover={handleHoverOver} />
      </div>
    </section>
  )
}
type hoverStateFunction = (state: boolean) => void

interface gtlItemTypes {
  isActive?: boolean
  imgURL: string
  handleHover: hoverStateFunction
  gtlProducts: gtlProductType[]
}

interface gtlProductType {
  top: string
  left: string
  gtlProduct: Product
}

interface Product {
  id: string
  name: string
  imgUrl: string
  bgColor: string
  oldPrice: number
  price: number
  varieties: ProductVariety[]
}

type ProductVariety = Record<string, string>

const GtlItem =
  ({ isActive = false, imgURL, gtlProducts, handleHover }: gtlItemTypes): React.ReactNode => (
    <div className={`sn-gtl-item ${isActive ? 'active' : ''}`}>
      <div
        className="sn-gtl-item-inner position-relative"
        onMouseEnter={() => handleHover(false)}
        onMouseLeave={() => handleHover(true)}
      >
        <Image
          src={`/images/gtl/${imgURL}`}
          alt="get the look image"
          width={150}
          height={420}
          quality={100}
        />
        {
          gtlProducts.map((item) => (
            <div
              className="sn-gtl-set product-list position-absolute"
              style={{ top: item.top, left: item.left }}
              key={item.gtlProduct.id}
            >
              <span className="sn-gtl-item-dot" />
              <ProductCard product={item.gtlProduct} />
            </div>
          ))
        }
      </div>
    </div>
  )

const productChandTora = {
  id: 's1',
  name: "Chand Tora",
  imgUrl: 'chand-toras.webp',
  bgColor: '#AEE6EC',
  oldPrice: 699,
  price: 499,
  varieties: [{ colors: "2" }, { colors: "4" }]
}

const productGatra = {
  id: '2',
  name: "Gatras",
  imgUrl: 'gataras.webp',
  bgColor: '#FEC4CC',
  oldPrice: 699,
  price: 499,
  varieties: [{ colors: "2" }, { colors: "4" }]
}
const productKaraha = {
  id: '3',
  name: "Karaha",
  imgUrl: 'karaha.webp',
  bgColor: '#FEC4CC',
  oldPrice: 699,
  price: 499,
  varieties: [{ colors: "2" }, { colors: "4" }]
}

const gtlProduct1 = [
  {
    top: '2%',
    left: '38%',
    gtlProduct: productChandTora
  }
]

const gtlProduct2 = [
  {
    top: '2%',
    left: '38%',
    gtlProduct: productChandTora
  },
  {
    top: '20%',
    left: '28%',
    gtlProduct: productGatra
  },
  {
    top: '42%',
    left: '33%',
    gtlProduct: productKaraha
  }
]

export default GetTheLook
