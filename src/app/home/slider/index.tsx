/* eslint-disable @typescript-eslint/strict-boolean-expressions */

"use client"

import { useEffect, useState } from "react"
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

  return (
    <section className="slider-outer">
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
            aria-label="Select Slide 1"
            className={`btn-slide-changer ${activeSlide === 0 ? 'active' : ''}`}
            onClick={() => setActiveSlide(0)}
          />
        </li>
        <li>
          <button
            type="button"
            aria-label="Select Slide 2"
            className={`btn-slide-changer ${activeSlide === 1 ? 'active' : ''}`}
            onClick={() => setActiveSlide(1)}
          />
        </li>
        <li>
          <button
            type="button"
            aria-label="Select Slide 3"
            className={`btn-slide-changer ${activeSlide === 2 ? 'active' : ''}`}
            onClick={() => setActiveSlide(2)}
          />
        </li>
        <li className="slide-num">
          0
          {totalSlides}
        </li>
      </ul>
    </section>
  )
}

export default Slider
