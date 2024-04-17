import { useLocale } from "next-intl"
import ProductList from "../home/products/ProductsList"

const CartPage = (): React.ReactNode => {
  const lang = useLocale()

  return (
    <section>
      <h2>Your cart items</h2>
      <ProductList
        listQuery="/products?filters=true&set=6607ba1787019781d7ead2fb,6605608d2ffda6654676148f,660950fdada6d0858b1377fb,660675d23d7008d72eabdfcc,66078c500a0e70610e3a7429"
        outerClass="section-more-width more-popular"
        heading="Pair with Items in Your Cart"
        moreLink={`${lang}/shop`}
      />
    </section>
  )
}

export default CartPage
