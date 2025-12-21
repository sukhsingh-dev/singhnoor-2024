/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { model, Schema, models, type Model } from "mongoose"

const CartAndWishlistSchema = new Schema({
  userId: { type: String, required: true },
  userEmail: { type: String, required: true },
  cartItems: { type: Array },
  wishlistItems: { type: Array }
}, {
  timestamps: true
})

let CartAndWishlistModel = models.CartAndWishlist as any
if (!CartAndWishlistModel) {
  CartAndWishlistModel = model('CartAndWishlist', CartAndWishlistSchema)
}

// eslint-disable-next-line import/prefer-default-export
export const CartAndWishlist = CartAndWishlistModel as Model<any>
