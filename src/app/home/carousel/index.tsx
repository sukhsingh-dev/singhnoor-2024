"use client"

import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import { useRef, useEffect, useCallback, useState } from "react"
import "./carousel.sass"

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const currentIndexRef = useRef(0)
  const [timerReset, setTimerReset] = useState(0)

  const handleNext = useCallback((): void => {
    const container = carouselRef.current
    if (container === null) return

    const items = container.querySelectorAll('.sn-carousel--item')
    const totalItems = items.length

    const prevIndex = currentIndexRef.current
    currentIndexRef.current = (currentIndexRef.current + 1) % totalItems
    const currentIndex = currentIndexRef.current
    const nextIndex = (currentIndex + 1) % totalItems

    items.forEach((item) => {
      item.classList.remove('active', 'prev', 'next')
    })

    items[prevIndex].classList.add('prev')
    items[currentIndex].classList.add('active')
    items[nextIndex].classList.add('next')
  }, [])

  const handlePrev = useCallback((): void => {
    const container = carouselRef.current
    if (container === null) return

    const items = container.querySelectorAll('.sn-carousel--item')
    const totalItems = items.length

    currentIndexRef.current = (currentIndexRef.current - 1 + totalItems) % totalItems
    const currentIndex = currentIndexRef.current
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems
    const nextIndex = (currentIndex + 1) % totalItems

    items.forEach((item) => {
      item.classList.remove('active', 'prev', 'next')
    })

    items[currentIndex].classList.add('active')
    items[prevIndex].classList.add('prev')
    items[nextIndex].classList.add('next')
  }, [])

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent): void => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = (): void => {
    if (touchStartX.current === null || touchEndX.current === null) return

    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      handleNext()
      setTimerReset((prev) => prev + 1)
    } else if (distance < -minSwipeDistance) {
      handlePrev()
      setTimerReset((prev) => prev + 1)
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [handleNext, timerReset])

  return (
    <div
      className="sn-carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="sn-carousel--list">
        {/* eslint-disable-next-line max-len */}
        <SlideData slideClass="active" slideNumber="1" url="/shop?filters=true&category=Leather%20Gatra,Fabric%20Gatra" />
        <SlideData slideClass="next" slideNumber="2" url="/shop?filters=true&subCategory=T-shirts" />
        <SlideData slideClass="prev" slideNumber="3" url="/shop?filters=true&category=Leather%20Craft" />
      </div>
      <div className="sn-carousel--arrows">
        <button type="button" aria-label="Go to previous slide" className="sn-carousel--arrow prev" onClick={handlePrev}>
          <Icon name="chevron-left" />
        </button>
        <button type="button" aria-label="Go to next slide" className="sn-carousel--arrow next" onClick={handleNext}>
          <Icon name="chevron-right" />
        </button>
      </div>
    </div>
  )
}

// eslint-disable-next-line max-len
const SlideData = ({ slideClass, slideNumber, url }: { slideClass: string, slideNumber: string, url: string }): React.ReactNode => {
  return (
    <div className={`sn-carousel--item ${slideClass}`}>
      <Link href={url}>
        <picture>
          <source
            media="(min-width: 750px)"
            srcSet={`/images/carousel/slide-desktop-${slideNumber}.webp`}
          />
          <Image
            className="sn-carousel--image"
            alt="Slide image"
            width={1510}
            height={514}
            src={`/images/carousel/slide-mobile-${slideNumber}.webp`}
          />
        </picture>
      </Link>
    </div>
  )
}

export default Carousel
