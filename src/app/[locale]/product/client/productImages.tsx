'use client'

import Image from "next/image"
import Icon from '@/shared/components/Icon'
import { useRef, useState, useEffect } from "react"
import Modal from "@/shared/components/ui/modal/Modal"
import Link from "next/link"

const PageTopItems = ({ imagesList }: { imagesList: string[] }): React.ReactNode => {
  // fix rendering issue on every image change
  // console.log("rendering")

  const totalImages = imagesList.length
  const imgShape = 450 // match this with imgShape variable in product.sass
  const imgBox = useRef<HTMLDivElement | null>(null)
  const [activeImg, setActiveImg] = useState<number>(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleDotClick = (imgNumb: number): void => {
    setActiveImg(imgNumb)
  }

  const changeImage = (direction: number): void => {
    setActiveImg((prevActiveImg) => {
      let nextActiveImg = prevActiveImg + direction
      if (nextActiveImg >= totalImages) {
        nextActiveImg = 0
      } else if (nextActiveImg < 0) {
        nextActiveImg = totalImages - 1
      }
      return nextActiveImg
    })
  }

  useEffect(() => {
    document.querySelector('body')?.classList.add('sn-product-body')

    return () => {
      document.querySelector('body')?.classList.remove('sn-product-body')
    }
  }, [])

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
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(1)
    }, 6000)

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [activeImg])

  return (
    <>
      <Link href="/en/shop" className="page-back-btn">
        <Icon name="chevron-up" width={12} height={8} />
        <span>Back</span>
      </Link>
      <button
        type="button"
        aria-label="expand images"
        className="btn-product btn-expand"
        onClick={() => setIsFullScreen(true)}
      >
        <Icon name="expand" />
      </button>
      <div className="sn-product-page-images" ref={imgBox}>
        <div
          className="slider-track d-flex"
          style={{ transform: `translateX(calc(-100% * ${activeImg}))` }}
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
      {
        isFullScreen && (
          <Modal
            className="images-full-screen"
            modalClose={setIsFullScreen}
            modalBody={(
              <>
                <button
                  type="button"
                  aria-label="previous image"
                  className="btn-modal btn-prev"
                  onClick={() => setActiveImg((prev) => (prev - 1 + totalImages) % totalImages)}
                >
                  <Icon name="chevron-left" width={16} height={16} />
                </button>
                <div className="sn-product-page-images" ref={imgBox}>
                  <div
                    className="slider-track d-flex"
                    style={{ transform: `translateX(calc(-100% * ${activeImg}))` }}
                  >
                    {
                      imagesList.map((imageSrc: string) => (
                        <Image
                          key={imageSrc}
                          src={imageSrc}
                          alt="product image"
                          width={1000}
                          height={1000}
                          quality={100}
                        />
                      ))
                    }
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="next image"
                  className="btn-modal btn-next"
                  onClick={() => setActiveImg((prev) => (prev + 1) % totalImages)}
                >
                  <Icon name="chevron-right" width={16} height={16} />
                </button>
              </>
            )}
          />
        )
      }
    </>
  )
}

export default PageTopItems
