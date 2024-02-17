/* eslint-disable @typescript-eslint/strict-boolean-expressions */

"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Slide1, Slide2, Slide3 } from "./slides"
import './style.sass'

const Slider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 3
  const [scrollDown, setScrollDown] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [activeSlide])

  useEffect(() => {
    let prevScrollPos = window.scrollY || document.documentElement.scrollTop
    const main = document.querySelector('body')

    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop
      setScrollDown(currentScrollPos > 100 && currentScrollPos > prevScrollPos)
      prevScrollPos = currentScrollPos

      if (window.scrollY > 64) {
        main?.classList.add('show-header')
      } else {
        main?.classList.remove('show-header')
      }
    }

    window.addEventListener('scroll', handleScroll)

    // eslint-disable-next-line no-unused-expressions
    scrollDown ? main?.classList.add('page-down') : main?.classList.remove('page-down')

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollDown])

  useEffect(() => {
    const animItems = document.querySelectorAll('.aos')

    const removeClasses = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('aos')
        }
      })
    }

    const observer = new IntersectionObserver(removeClasses, {
      rootMargin: "-60px 0px",
      threshold: 0.5
    })

    animItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>): void => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>): void => {
    if (!touchStartX.current) {
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
            aria-label="Select Slide for Women"
            className={`btn-slide-changer ${activeSlide === 0 ? 'active' : ''}`}
            onClick={() => setActiveSlide(0)}
          >
            Women
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="Select Slide for Men"
            className={`btn-slide-changer ${activeSlide === 1 ? 'active' : ''}`}
            onClick={() => setActiveSlide(1)}
          >
            Men
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="Select Slide for Accessories"
            className={`btn-slide-changer ${activeSlide === 2 ? 'active' : ''}`}
            onClick={() => setActiveSlide(2)}
          >
            Accessories
          </button>
        </li>
        <li className="slide-num">
          0
          {totalSlides}
        </li>
        <li>
          <Link href="/" className="btn btn-secondary">Create your Own</Link>
        </li>
      </ul>
    </section>
  )
}

export default Slider
