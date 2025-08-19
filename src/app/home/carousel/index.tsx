/* eslint-disable @typescript-eslint/strict-boolean-expressions */

'use client'

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Icon from "@/shared/components/Icon"
import "./carousel.sass"

const timeRunning = 600
const timeAutoNext = 6000

const Carousel: React.FC = () => {
  const [carousel, setCarousel] = useState<any[]>([])
  const carouselDom = useRef<HTMLDivElement>(null)
  const sliderDomRef = useRef<HTMLDivElement>(null)
  const thumbnailBorderDom = useRef<HTMLDivElement>(null)
  const runTimeOut = useRef<NodeJS.Timeout | null>(null)
  const runNextAuto = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fetchCarousel = async (): Promise<void> => {
      try {
        const res = await fetch(`${process.env.BACKOFFICE_URL}/carousel`)
        const data = await res.json()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCarousel(data)
      } catch (error) {
        setCarousel([])
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCarousel()
  }, [])

  // Auto next slide
  useEffect(() => {
    if (carousel.length === 0) return
    runNextAuto.current = setTimeout(() => {
      handleNext()
    }, timeAutoNext)
    // eslint-disable-next-line consistent-return
    return () => {
      if (runNextAuto.current != null) clearTimeout(runNextAuto.current)
    }
  }, [carousel])

  const showSlider = (type: "next" | "prev"): void => {
    // Clear all timeouts and remove classes before proceeding
    if (runTimeOut.current) clearTimeout(runTimeOut.current)
    if (runNextAuto.current) clearTimeout(runNextAuto.current)
    if (carouselDom.current) {
      carouselDom.current.classList.remove("next")
      carouselDom.current.classList.remove("prev")
    }

    const sliderItems = sliderDomRef.current?.querySelectorAll(".sn-carousel--item")
    const thumbnailItems = thumbnailBorderDom.current?.querySelectorAll(".sn-carousel--thumbnail-item")
    if (!sliderItems || !thumbnailItems || !carouselDom.current) return

    if (type === "next") {
      sliderDomRef.current?.appendChild(sliderItems[0])
      thumbnailBorderDom.current?.appendChild(thumbnailItems[0])
      carouselDom.current.classList.add("next")
    } else {
      sliderDomRef.current?.prepend(sliderItems[sliderItems.length - 1])
      thumbnailBorderDom.current?.prepend(thumbnailItems[thumbnailItems.length - 1])
      carouselDom.current.classList.add("prev")
    }

    runTimeOut.current = setTimeout(() => {
      carouselDom.current?.classList.remove("next")
      carouselDom.current?.classList.remove("prev")
    }, timeRunning)

    runNextAuto.current = setTimeout(() => {
      handleNext()
    }, timeAutoNext)
  }

  const handleNext = (): void => showSlider("next")
  const handlePrev = (): void => showSlider("prev")

  return (
    <div className="sn-carousel" ref={carouselDom}>
      <div className="sn-carousel--list" ref={sliderDomRef}>
        {carousel.map((slide: any) => (
          <div className="sn-carousel--item" key={slide._id}>
            <picture>
              <source
                media="(min-width: 750px)"
                srcSet={slide.productImagesArray[1]}
                type="image/webp"
              />
              <Image
                className="sn-carousel--image"
                src={slide.productImagesArray[0]}
                alt={slide.description}
                width={767}
                height={965}
              />
            </picture>
          </div>
        ))}
      </div>
      <div className="sn-carousel--thumbnail" ref={thumbnailBorderDom}>
        {carousel.map((slide: any) => (
          <div className="sn-carousel--thumbnail-item" key={slide._id}>
            <picture>
              <source
                media="(min-width: 750px)"
                srcSet={slide.productImagesArray[1]}
                type="image/jpeg"
              />
              <img
                src={slide.productImagesArray[0]}
                alt={slide.description}
                width={80}
                height={100}
              />
            </picture>
          </div>
        ))}
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

export default Carousel
