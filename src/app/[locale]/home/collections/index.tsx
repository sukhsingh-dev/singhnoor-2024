import { Heading } from "@/shared/components/ui"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import './collection.sass'

const Collections: React.FC = () => {
  const t = useTranslations("Index")

  return (
    <section>
      <Heading text={t('newCollection')} />
      <div className="sn-collections">
        <div className="sn-collections-card active">
          <div className="sn-collections-card-img">
            <Image
              src="/images/collections/for-him.webp"
              alt="card img"
              quality={100}
              width={550}
              height={480}
            />
          </div>
          <h3 className="sn-collections-heading">FOR HIM</h3>
          <div className="sn-collections-info">
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
              src="/images/collections/for-her.webp"
              alt="card img"
              quality={100}
              width={550}
              height={480}
              className="for-her"
            />
          </div>
          <h3 className="sn-collections-heading">FOR HER</h3>
          <div className="sn-collections-info">
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
              src="/images/collections/for-kids.webp"
              alt="card img"
              quality={100}
              width={550}
              height={480}
              className="for-her"
            />
          </div>
          <h3 className="sn-collections-heading">FOR KIDS</h3>
          <div className="sn-collections-info">
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
              src="/images/collections/for-couples.webp"
              alt="card img"
              quality={100}
              width={550}
              height={480}
              className="for-her"
            />
          </div>
          <h3 className="sn-collections-heading">FOR COUPLE</h3>
          <div className="sn-collections-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus debitis mollitia
            </p>
            <Link href="/" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collections
