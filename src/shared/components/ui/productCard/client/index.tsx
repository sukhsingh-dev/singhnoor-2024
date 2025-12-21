'use client'

import Icon from "@/shared/components/Icon"
import { type StoreBtnTypes } from "@/shared/helper/types"
import { addToCartWishList } from "@/shared/server/actions"
import { useUser } from "@clerk/clerk-react"
import {
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import Link from "next/link"
import { useState, useTransition } from "react"
import Modal from "../../modal/Modal"

// eslint-disable-next-line max-len
export default function StoreBtn({ productInfo, storeName, btnClasses, selected }: StoreBtnTypes): React.ReactNode {

  const { user } = useUser()
  const [isPending, startTransition] = useTransition()
  const [showModel, setShowModel] = useState(false)
  const [modalText, setModelText] = useState('')
  const [alertType, setAlertTypeAlert] = useState("info")

  const handleStoreBtnClick = (): void => {
    const data = {
      userId: user?.id ?? '',
      userEmail: user?.emailAddresses[0].emailAddress ?? '',
      actionName: storeName,
      productInfo: {
        id: productInfo._id,
        selected
      }
    }

    startTransition(async () => {
      const result = await addToCartWishList(data)

      if (result.success) {
        setAlertTypeAlert("info")
        setModelText(result.message)
      } else {
        setAlertTypeAlert("error")
        setModelText("Something went wrong")
        // console.log(result.error)
      }
      setShowModel(true)
    })
  }

  return (
    <>
      <SignedOut>
        <Link href="/sign-in" className={btnClasses} aria-label={storeName}>
          <Icon name={storeName === "cart" ? "cart" : "heart"} />
        </Link>
      </SignedOut>
      <SignedIn>
        <button type="button" className={btnClasses} aria-label={storeName} onClick={handleStoreBtnClick}>
          {isPending ?
            "Adding..." :
            <Icon name={storeName === "cart" ? "cart" : "heart"} />}
        </button>
      </SignedIn>
      {
        showModel &&
        <Modal
          className="small-modal"
          modalBody={<h4 className="item-heading">{modalText}</h4>}
          modalClose={setShowModel}
          time={3000}
          type={alertType}
        />
      }
    </>
  )
}
