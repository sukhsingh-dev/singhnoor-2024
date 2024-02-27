import { productList, productList2 } from "@/shared/helper/store"
import Slider from "./home/slider"
import Categories from "./home/categories"
import Products from "./home/products"
import Collections from "./home/collections"
import TodayDeal from "./home/deals"
import DealsZone from "./home/zone"
import GetTheLook from "./home/looks"

export default function Home(): React.ReactNode {
  return (
    <>
      <Slider />
      <Categories />
      <Products heading="TOP PICKS" productList={productList2} moreLink="/" outerClass="top-picks" />
      <Collections />
      <TodayDeal />
      <Products heading="MOST POPULAR" productList={productList} moreLink="/" />
      <GetTheLook />
      <DealsZone />
    </>
  )
}
