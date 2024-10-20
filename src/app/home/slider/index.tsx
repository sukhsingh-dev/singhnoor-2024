"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Slide1, Slide2, Slide3 } from "./slides"
import './slider.sass'

const Slider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [activeSlide])

  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>): void => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>): void => {
    if (touchStartX.current == null) {
      return
    }

    const currentX = event.touches[0].clientX
    const diffX = touchStartX.current - currentX

    const moveBack = (): void => {
      if (activeSlide >= 1) {
        setActiveSlide((prevSlide) => (prevSlide - 1) % totalSlides)
      } else {
        setActiveSlide(totalSlides - 1)
      }
    }

    // Check if the swipe is significant enough
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides)
      } else {
        moveBack()
      }
      touchStartX.current = null
    }
  }

  return (
    <div className="bg-design">
      <section
        className="slider-outer section-full-width"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={activeSlide === 0 ? '' : 'd-none'}>
          <Slide1 />
        </div>
        <div className={activeSlide === 1 ? '' : 'd-none'}>
          <Slide2 />
        </div>
        <div className={activeSlide === 2 ? '' : 'd-none'}>
          <Slide3 />
        </div>
        <ul className="slide-changer">
          <li className="slide-num">
            0
            {activeSlide + 1}
          </li>
          <li>
            <button
              type="button"
              aria-label="Select Slide for Accessories"
              className={`btn-slide-changer ${activeSlide === 0 ? 'active' : ''}`}
              onClick={() => setActiveSlide(0)}
            >
              Designer Gatra
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Select Slide for Women"
              className={`btn-slide-changer ${activeSlide === 1 ? 'active' : ''}`}
              onClick={() => setActiveSlide(1)}
            >
              Women
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Select Slide for Men"
              className={`btn-slide-changer ${activeSlide === 2 ? 'active' : ''}`}
              onClick={() => setActiveSlide(2)}
            >
              Leather Bag
            </button>
          </li>
          <li className="slide-num">
            0
            {totalSlides}
          </li>
          <li>
            <Link href="/" className="btn btn-secondary btn-arrow-long">Create your Own</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Slider
