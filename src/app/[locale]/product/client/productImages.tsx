'use client'

import Image from "next/image"
import Icon from '@/shared/components/Icon'
import { useRef, useState, useEffect } from "react"

interface PageTopTypes {
  imagesList: string[]
}

const PageTopItems = ({ imagesList }: PageTopTypes): React.ReactNode => {
  // fix rendering issue on every image change
  // console.log("rendering")

  const totalImages = imagesList.length
  const imgShape = 450 // match this with imgShape variable in product.sass
  const track = useRef<HTMLDivElement | null>(null)
  const imgBox = useRef<HTMLDivElement | null>(null)
  const [trackMove, setTrackMove] = useState<number>(0)
  const [activeImg, setActiveImg] = useState<number>(0)
  const imgSize = ((imgBox.current?.clientWidth) != null) ? imgBox.current.clientWidth : imgShape

  const handleDotClick = (imgNumb: number): void => {
    setActiveImg(imgNumb)
    setTrackMove(imgSize * imgNumb)
  }

  const changeImage = (direction: number): void => {
    setActiveImg((prevActiveImg) => {
      let nextActiveImg = prevActiveImg + direction
      if (nextActiveImg >= totalImages) {
        nextActiveImg = 0
      } else if (nextActiveImg < 0) {
        nextActiveImg = totalImages - 1
      }
      setTrackMove(imgSize * nextActiveImg)
      return nextActiveImg
    })
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
        changeImage(1)
      } else if (startX - endX < -50) {
        // Swipe right
        changeImage(-1)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgSize])

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(1)
    }, 3000)

    return () => clearInterval(interval) // Clear interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImg])

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
          {
            imagesList.map((imageSrc: string) => (
              <Image
                key={imageSrc}
                src={imageSrc}
                alt="product image"
                width={imgShape}
                height={imgShape}
                quality={100}
              />
            ))
          }
        </div>
      </div>
      <ul className="sn-product-page-slider">
        {
          imagesList.map((imageSrc: string, index: number) => (
            <li
              key={imageSrc}
              className={activeImg === index ? 'active' : ''}
            >
              <button type="button" onClick={() => handleDotClick(index)}>
                Slide
                {index + 1}
              </button>
            </li>
          ))
        }
      </ul>
      <div className="sn-product-page-thumbnails">
        {
          imagesList.map((imageSrc: string, index: number) => (
            <Image
              key={imageSrc}
              src={imageSrc}
              alt="product image"
              width={80}
              height={80}
              quality={100}
              onClick={() => handleDotClick(index)}
              className={activeImg === index ? 'active' : ''}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PageTopItems
