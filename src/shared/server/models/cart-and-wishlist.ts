/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { model, Schema, models } from "mongoose"

const CartAndWishlistSchema = new Schema({
  userId: { type: String, required: true },
  userEmail: { type: String, required: true },
  cartItems: { type: Array },
  wishlistItems: { type: Array }
}, {
  timestamps: true
})

// eslint-disable-next-line import/prefer-default-export
export const CartAndWishlist = models.CartAndWishlist || model('CartAndWishlist', CartAndWishlistSchema)
