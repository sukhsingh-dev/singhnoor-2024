import { productList, productList2 } from "@/shared/helper/store"
import Slider from "./home/slider"
import Categories from "./home/categories"
import Products from "./home/products"
import Collections from "./home/collections"
import TodayDeal from "./home/deals"

export default function Home(): React.ReactNode {
  return (
    <>
      <Slider />
      <Categories />
      <Products heading="FRESH LOOKS" productList={productList} moreLink="/" />
      <Collections />
      <TodayDeal />
      <Products heading="TOP PICKS" productList={productList2} moreLink="/" outerClass="top-picks" />
    </>
  )
}
