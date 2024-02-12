import { productList } from "@/shared/helper/store"
import Slider from "./home/slider"
import Categories from "./home/categories"
import Products from "./home/products"

export default function Home(): React.ReactNode {
  return (
    <>
      <Slider />
      <Categories />
      <Products heading="FRESH LOOKS" productList={productList} moreLink="/" />
    </>
  )
}
