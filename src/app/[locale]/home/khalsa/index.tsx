'use client'

import { Heading } from "@/shared/components/ui"
// import { useTranslations } from "next-intl"
// import Link from "next/link"
import Image from "next/image"
import './khalsa.sass'
import { useEffect, useRef, useState } from "react"

const KhalsaCollections: React.FC = () => {
  // const t = useTranslations("Index")
  const imgBox = useRef<HTMLDivElement | null>(null)
  const [trackMove, setTrackMove] = useState<number>(0)
  // const [activeImg, setActiveImg] = useState<number>(0)

  // const changeImage = (direction: number): void => {
  //   setActiveImg((prevActiveImg) => {
  //     let nextActiveImg = prevActiveImg + direction
  //     if (nextActiveImg >= totalImages) {
  //       nextActiveImg = 0
  //     } else if (nextActiveImg < 0) {
  //       nextActiveImg = totalImages - 1
  //     }
  //     setTrackMove(imgSize * nextActiveImg)
  //     return nextActiveImg
  //   })
  // }

  useEffect(() => {
    const imgBoxCurrent = imgBox.current
    const windowSize = window.innerWidth

    let startX: number
    let endX: number

    const onTouchStart = (e: TouchEvent): void => {
      startX = e.touches[0].clientX
      // console.log(startX, (windowSize / 2))
    }

    const onTouchMove = (e: TouchEvent): void => {
      endX = e.touches[0].clientX
      console.log(e.touches[0])
      if (endX > (windowSize / 2)) {
        // console.log("if condition")
        setTrackMove((prev) => prev - 2)

      } else {
        // Swipe right
        // console.log("else condition")
        setTrackMove((prev) => prev + 2)
      }
    }

    if (imgBoxCurrent !== null) {
      imgBoxCurrent.addEventListener('touchstart', onTouchStart)
      imgBoxCurrent.addEventListener('touchmove', onTouchMove)
    }

    return () => {
      if (imgBoxCurrent !== null) {
        imgBoxCurrent.removeEventListener('touchstart', onTouchStart)
        imgBoxCurrent.removeEventListener('touchmove', onTouchMove)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  return (
    <section>
      <Heading text="Khalsa collection" />
      <div className="sn-khalsa-collections" ref={imgBox}>
        <div className="sn-slider-track-outer">
          <div
            className="sn-slider-track"
            style={{ transform: `translateX(${trackMove}px)` }}
          >
            <div className="sn-khalsa-card">
              <Image
                width={400}
                height={400}
                quality={100}
                alt="SN"
                src="/images/collections/khalsa/the-khaslsa-2.png"
              />
              <div className="data">
                <h2>The Khalsa</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium beatae culpa, reiciendis laborum, dignissimos numquam
                </p>
              </div>
            </div>

            <div className="sn-khalsa-card active">
              <Image
                width={400}
                height={400}
                quality={100}
                alt="SN"
                src="/images/collections/khalsa/the-nihang.png"
              />
              <div className="data">
                <h2>The Nihang</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium beatae culpa, reiciendis laborum, dignissimos numquam
                </p>
              </div>
            </div>

            <div className="sn-khalsa-card">
              <Image
                width={400}
                height={400}
                quality={100}
                alt="SN"
                src="/images/collections/khalsa/the-bhunangi.png"
              />
              <div className="data">
                <h2>The Bhujangi</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium beatae culpa, reiciendis laborum, dignissimos numquam
                </p>
              </div>
            </div>

            <div className="sn-khalsa-card">
              <Image
                width={400}
                height={400}
                quality={100}
                alt="SN"
                src="/images/collections/khalsa/the-kaur.png"
              />
              <div className="data">
                <h2>The Kaur</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium beatae culpa, reiciendis laborum, dignissimos numquam
                </p>
              </div>
            </div>

            <div className="sn-khalsa-card">
              <Image
                width={400}
                height={400}
                quality={100}
                alt="SN"
                src="/images/collections/khalsa/the-shaster.png"
              />
              <div className="data">
                <h2>The Shaster</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium beatae culpa, reiciendis laborum, dignissimos numquam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KhalsaCollections
