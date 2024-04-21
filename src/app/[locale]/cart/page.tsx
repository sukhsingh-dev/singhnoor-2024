import CartItems from "./client/CartItems"

const CartPage = (): React.ReactNode => (
  <section>
    <h2 className="cart-page-title">Your Cart Items</h2>
    <CartItems />
  </section>
)

export default CartPage
