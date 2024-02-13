'use client'

import { useEffect, useRef } from "react"
import { Heading, TextDecorator } from "@/shared/components/ui"
import Image from "next/image"
import './style.sass'

const TodayDeal: React.FC = () => {
  const imgBox = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      imgBox.current?.classList.add('t-shirts-set-animation')
      if (imgBox.current != null) {
        const clone = imgBox.current.children[1].cloneNode(true)
        imgBox.current.appendChild(clone)
      }

      setTimeout(() => {
        if (imgBox.current != null) {
          imgBox.current?.classList.remove('t-shirts-set-animation')
          imgBox.current.removeChild(imgBox.current.children[0])
        }
      }, 1500)
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="text-center deals-outer">
      <Heading text="TODAY'S DEAL" />
      <div className="position-relative deals-offer">
        <div className="deals-bg-decorator" style={{ backgroundColor: '#F7DACA' }} />
        <div className="t-shirts-set position-absolute" ref={imgBox}>
          <Image src="/images/t-shirts/t-3.webp" alt="" loading="lazy" width={210} height={210} />
          <Image src="/images/t-shirts/t-2.webp" alt="" loading="lazy" width={210} height={210} />
          <Image src="/images/t-shirts/t-4.webp" alt="" loading="lazy" width={210} height={210} />
          <Image src="/images/t-shirts/t-3.webp" alt="" loading="lazy" width={210} height={210} />
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
}

export default TodayDeal