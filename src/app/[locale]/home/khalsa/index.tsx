import { Heading } from "@/shared/components/ui"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import './khalsa.sass'

const KhalsaCollections: React.FC = () => {
  const t = useTranslations("Index")

  return (
    <section>
      <Heading text={t('khalsaCollection')} />
      <div className="sn-khalsa-collections">
        <div className="sn-khalsa-collections-side-left">
          <div className="sn-collections-card">
            <div className="sn-collections-card-img">
              <Image
                src="/images/collections/khalsa/the-nihang.png"
                alt="card img"
                quality={100}
                width={550}
                height={480}
              />
            </div>
            <div className="sn-khalsa-collections-info">
              <h3 className="sn-khalsa-collections-heading">
                <small>THE</small>
                <span>NIHANG</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus debitis mollitia
              </p>
              <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
            </div>
          </div>

          <div className="sn-collections-card">
            <div className="sn-collections-card-img">
              <Image
                src="/images/collections/khalsa/the-bhunangi.png"
                alt="card img"
                quality={100}
                width={550}
                height={480}
                className="for-her"
              />
            </div>
            <div className="sn-khalsa-collections-info">
              <h3 className="sn-khalsa-collections-heading">
                <small>THE</small>
                <span>BHUJANGI</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus debitis mollitia
              </p>
              <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
            </div>
          </div>
        </div>
        <div className="sn-khalsa-collections-side-center">
          <div className="sn-collections-card">
            <div className="sn-collections-card-img">
              <Image
                src="/images/collections/khalsa/the-khaslsa-2.png"
                alt="card img"
                quality={100}
                width={550}
                height={480}
                className="for-her"
              />
            </div>
            <div className="sn-khalsa-collections-info">
              <h3 className="sn-khalsa-collections-heading">
                <small>THE</small>
                <span>KHALSA</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus debitis mollitia
              </p>
              <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
            </div>
          </div>
        </div>
        <div className="sn-khalsa-collections-side-right">
          <div className="sn-collections-card">
            <div className="sn-collections-card-img">
              <Image
                src="/images/collections/khalsa/the-kaur.png"
                alt="card img"
                quality={100}
                width={550}
                height={480}
                className="for-her"
              />
            </div>
            <div className="sn-khalsa-collections-info">
              <h3 className="sn-khalsa-collections-heading">
                <small>THE</small>
                <span>KAUR</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus debitis mollitia
              </p>
              <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
            </div>
          </div>

          <div className="sn-collections-card">
            <div className="sn-collections-card-img">
              <Image
                src="/images/collections/khalsa/the-shaster.png"
                alt="card img"
                quality={100}
                width={550}
                height={480}
                className="for-her"
              />
            </div>
            <div className="sn-khalsa-collections-info">
              <h3 className="sn-khalsa-collections-heading">
                <small>THE</small>
                <span>SHASTER</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus debitis mollitia
              </p>
              <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KhalsaCollections
