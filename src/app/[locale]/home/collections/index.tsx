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
              Explore our curated selection of men&#39;s essentials, featuring stylish clothing,
              designer gatras, custom-made shasters, and an array of premium leather goods.
            </p>
            <Link href="/en/shop?filters=true&Gender=Men" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
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
              Discover our collection tailored for the modern woman, showcasing ladies&#39;
              t-shirts, elegant gatras, sophisticated leather bags, and designer hand pouches
              to elevate your style effortlessly.
            </p>
            <Link href="/en/shop?filters=true&Gender=Women" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
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
              Introduce your little ones to a world of style with our selection of kids&#39;
              essentials. Explore trendy kids t-shirts, adorable gatras,
              and miniature decorative shasters designed to inspire their imagination and charm.
            </p>
            <Link href="/en/shop?filters=true&Gender=Kids" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
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
              Indulge in twinning fashion with our couple&#39;s collection,
              offering matching stylish clothes, coordinated gatras, and a range
              of leather accessories and shasters. Elevate your bond with fashion that
              speaks to your unity and style.
            </p>
            <Link href="/en/shop?filters=true&Gender=Couple" className="btn btn-white-outline btn-arrow-long align-center sn-collections-btn">Explore</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collections
