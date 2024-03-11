'use client'

import { Heading } from "@/shared/components/ui"
import Image from "next/image"
import { useState, useRef, useEffect } from 'react'
import './khalsa.sass'

const KhalsaCollections: React.FC = () => {
  const [startX, setStartX] = useState<number | null>(null)
  const [offset, setOffset] = useState<number>(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX)
    console.log("handleTouch Running")
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // if (!startX) return

    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    console.log("handleTouchMove Running", diff)
    setOffset(diff)
  }

  const handleTouchEnd = () => {
    console.log("handleTouchEnd Running")
    if (!startX || !trackRef.current) return

    const trackWidth = trackRef.current.offsetWidth
    const threshold = trackWidth / 2

    if (Math.abs(offset) < threshold) {
      setOffset(0)
    } else {
      const nextCard = trackRef.current.querySelector('.sn-khalsa-card:not(.active)')
      if (nextCard) {
        nextCard.classList.add('active')
      }
      setOffset(-trackWidth)
    }

    setStartX(null)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    track.addEventListener('touchstart', handleTouchStart)
    track.addEventListener('touchmove', handleTouchMove)
    track.addEventListener('touchend', handleTouchEnd)

    return () => {
      track.removeEventListener('touchstart', handleTouchStart)
      track.removeEventListener('touchmove', handleTouchMove)
      track.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <section>
      <Heading text="Khalsa collection" />
      <div className="sn-khalsa-collections">
        <div className="sn-slider-track-outer">
          <div
            className="sn-slider-track"
            style={{ transform: `translateX(${offset}px)` }}
            ref={trackRef}
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
