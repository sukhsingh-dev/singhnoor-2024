import { productList, productList2 } from "@/shared/helper/store"
import { useTranslations } from "next-intl"
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

  return (
    <>
      <Slider />
      <Categories />
      <Products heading={t('topPicks')} productList={productList2} moreLink="/shop" outerClass="section-more-width top-picks" />
      <Collections />
      <TodayDeal />
      <Products heading={t('mostPopular')} productList={productList} moreLink="/shop" outerClass="section-more-width more-popular" />
      <GetTheLook />
      <KhalsaCollections />
      <DealsZone />
    </>
  )
}