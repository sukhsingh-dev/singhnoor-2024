/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

'use server'

import { revalidatePath } from 'next/cache'
import { mongooseConnect } from './mongoose'
import { CartAndWishlist } from './models/cart-and-wishlist'

interface SelectedStoreType {
  qty?: number
  size?: string | null
  color?: string | null
  material?: string | null
  work?: string | null
}

type CartAndWishListResult = {
  success: true
  message: string
} | {
  success: false
  error: string
}

interface CartWishList {
  userId: string
  userEmail: string
  actionName?: string
  productInfo: { id: string, selected: SelectedStoreType }
}

// eslint-disable-next-line import/prefer-default-export
export async function addToCartWishList(cartWishList: CartWishList): Promise<CartAndWishListResult> {
  console.log("Data is", cartWishList)
  try {
    await mongooseConnect()

    const existingCart = await CartAndWishlist.findOne({ userId: cartWishList.userId })

    console.log("Existing Cart is", cartWishList.userId, existingCart)
    if (cartWishList.actionName === "cart") {
      // if userId is already present then update the cartItems array
      if (existingCart !== null) {
        existingCart.cartItems.push(cartWishList.productInfo)
        await existingCart.save()
      } else {
        await CartAndWishlist.create({
          userId: cartWishList.userId,
          userEmail: cartWishList.userEmail,
          cartItems: [cartWishList.productInfo]
        })
      }
      revalidatePath('/cart')
    } else {
      if (existingCart !== null) {
        existingCart.wishlistItems.push(cartWishList.productInfo)
        await existingCart.save()
      } else {
        await CartAndWishlist.create({
          userId: cartWishList.userId,
          userEmail: cartWishList.userEmail,
          wishlistItems: [cartWishList.productInfo]
        })
      }
      revalidatePath('/wishlist')
    }
    return { success: true, message: `Product added to ${cartWishList.actionName === "cart" ? "cart" : "wishlist"}!` }
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return { success: false, error: `Failed to add item. Please try again.${error}` }
  }
}
