import { productList, productList2 } from "@/shared/helper/store"
import { useLocale, useTranslations } from "next-intl"
import Slider from "./home/slider"
import Categories from "./home/categories"
import Products from "./home/products"
import Collections from "./home/collections"
import TodayDeal from "./home/deals"
import DealsZone from "./home/zone"
import GetTheLook from "./home/looks"
import KhalsaCollections from "./home/khalsa"

export default function Home(): React.ReactNode {
  const t = useTranslations("Index")
  const lang = useLocale()

  return (
    <>
      <Slider />
      <Categories />
      <Products heading={t('topPicks')} productList={productList2} moreLink={`${lang}/shop`} outerClass="section-more-width top-picks" />
      <Collections />
      <TodayDeal heading={t('todayDeal')} />
      <Products heading={t('mostPopular')} productList={productList} moreLink={`${lang}/shop`} outerClass="section-more-width more-popular" />
      <GetTheLook heading={t('getLook')} />
      <KhalsaCollections />
      <DealsZone />
    </>
  )
}
