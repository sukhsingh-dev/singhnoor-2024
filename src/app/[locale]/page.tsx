import { useLocale, useTranslations } from "next-intl"
import Slider from "./home/slider"
import Categories from "./home/categories"
import Collections from "./home/collections"
import TodayDeal from "./home/deals"
// import DealsZone from "./home/zone"
import GetTheLook from "./home/looks"
import KhalsaCollections from "./home/khalsa"
import ProductList from "./home/products/ProductsList"

export default function Home(): React.ReactNode {
  const t = useTranslations("Index")
  const lang = useLocale()

  return (
    <>
      <Slider />
      <Categories />
      <ProductList
        listQuery="/products?filters=true&set=661fb23245e07081ab79ee10,661fb34045e07081ab79ee1d,6606cf6e9473554cbffb17c9,6606d3eed0c5373079537280,660678ba45e49b1e736a5dfd"
        outerClass="section-more-width top-picks"
        heading={t('topPicks')}
        moreLink={`${lang}/shop`}
      />
      <Collections />
      <TodayDeal heading={t('todayDeal')} />
      <ProductList
        listQuery="/products?filters=true&set=6607ba1787019781d7ead2fb,6605608d2ffda6654676148f,660950fdada6d0858b1377fb,660675d23d7008d72eabdfcc,66078c500a0e70610e3a7429"
        outerClass="section-more-width more-popular"
        heading={t('mostPopular')}
        moreLink={`${lang}/shop`}
      />
      <GetTheLook heading={t('getLook')} />
      <KhalsaCollections />
      {/* <DealsZone /> */}
    </>
  )
}
