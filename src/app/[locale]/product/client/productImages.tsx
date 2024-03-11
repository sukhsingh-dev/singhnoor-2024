'use client'

import Image from "next/image"
import Icon from '@/shared/components/Icon'
import { useRef, useState, useEffect } from "react"

const PageTopItems = (): React.ReactNode => {
  const track = useRef<HTMLDivElement | null>(null)
  const imgBox = useRef<HTMLDivElement | null>(null)
  const [trackMove, setTrackMove] = useState<number>(0)
  const [activeImg, setActiveImg] = useState<number>(0)
  const imgSize = ((imgBox.current?.clientWidth) != null) ? imgBox.current.clientWidth : 400

  const handleDotClick = (imgNumb: number): void => {
    setActiveImg(imgNumb)
    setTrackMove(imgSize * imgNumb)
  }

  useEffect(() => {
    const imgBoxCurrent = imgBox.current

    let startX: number
    let endX: number

    const onTouchStart = (e: TouchEvent): void => {
      startX = e.touches[0].clientX
    }

    const onTouchMove = (e: TouchEvent): void => {
      endX = e.touches[0].clientX
    }

    const onTouchEnd = (): void => {
      if (startX - endX > 50) {
        // Swipe left
        setActiveImg((prevActiveImg) => {
          const nextActiveImg = prevActiveImg + 1 >= 4 ? 0 : prevActiveImg + 1
          setTrackMove(imgSize * nextActiveImg)
          return nextActiveImg
        })
      } else if (startX - endX < -50) {
        // Swipe right
        setActiveImg((prevActiveImg) => {
          const nextActiveImg = prevActiveImg - 1 < 0 ? 3 : prevActiveImg - 1
          setTrackMove(imgSize * nextActiveImg)
          return nextActiveImg
        })
      }
    }

    if (imgBoxCurrent !== null) {
      imgBoxCurrent.addEventListener('touchstart', onTouchStart)
      imgBoxCurrent.addEventListener('touchmove', onTouchMove)
      imgBoxCurrent.addEventListener('touchend', onTouchEnd)
    }

    return () => {
      if (imgBoxCurrent !== null) {
        imgBoxCurrent.removeEventListener('touchstart', onTouchStart)
        imgBoxCurrent.removeEventListener('touchmove', onTouchMove)
        imgBoxCurrent.removeEventListener('touchend', onTouchEnd)
      }
    }
  }, [imgSize])

  return (
    <div className="sn-product-page-top">
      <button type="button" className="page-back-btn">
        <Icon name="chevron-up" width={12} height={8} />
        <span>Go Back</span>
      </button>
      <button
        type="button"
        aria-label="Add to Wishlist"
        className="btn-product btn-wishlist"
      >
        <Icon name="heart" />
      </button>
      <div className="sn-product-page-images" ref={imgBox}>
        <div
          className="slider-track d-flex"
          ref={track}
          style={{ transform: `translateX(-${trackMove}px)` }}
        >
          <Image
            src="/images/t-shirts/t-4.webp"
            alt="product image"
            width={400}
            height={400}
            quality={100}
          />
          <Image
            src="/images/t-shirts/t-5.webp"
            alt="product image"
            width={400}
            height={400}
            quality={100}
          />
          <Image
            src="/images/t-shirts/t-6.webp"
            alt="product image"
            width={400}
            height={400}
            quality={100}
          />
          <Image
            src="/images/t-shirts/t-2.webp"
            alt="product image"
            width={400}
            height={400}
            quality={100}
          />
        </div>
      </div>
      <ul className="sn-product-page-slider">
        <li className={activeImg === 0 ? 'active' : ''}>
          <button type="button" onClick={() => handleDotClick(0)}>Slide 1</button>
        </li>
        <li className={activeImg === 1 ? 'active' : ''}>
          <button type="button" onClick={() => handleDotClick(1)}>Slide 2</button>
        </li>
        <li className={activeImg === 2 ? 'active' : ''}>
          <button type="button" onClick={() => handleDotClick(2)}>Slide 3</button>
        </li>
        <li className={activeImg === 3 ? 'active' : ''}>
          <button type="button" onClick={() => handleDotClick(3)}>Slide 4</button>
        </li>
      </ul>
      <div className="sn-product-page-thumbnails">
        <Image
          src="/images/t-shirts/t-4.webp"
          alt="product image"
          width={80}
          height={80}
          quality={100}
          onClick={() => handleDotClick(0)}
          className={activeImg === 0 ? 'active' : ''}
        />
        <Image
          src="/images/t-shirts/t-5.webp"
          alt="product image"
          width={80}
          height={80}
          quality={100}
          onClick={() => handleDotClick(1)}
          className={activeImg === 1 ? 'active' : ''}
        />
        <Image
          src="/images/t-shirts/t-6.webp"
          alt="product image"
          width={80}
          height={80}
          quality={100}
          onClick={() => handleDotClick(2)}
          className={activeImg === 2 ? 'active' : ''}
        />
        <Image
          src="/images/t-shirts/t-2.webp"
          alt="product image"
          width={80}
          height={80}
          quality={100}
          onClick={() => handleDotClick(3)}
          className={activeImg === 3 ? 'active' : ''}
        />
      </div>
    </div>
  )
}

export default PageTopItems
