/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Image from "next/image"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="loading-page">
      <div className="loading-overlay">
        <Image
          alt="singhnoor logo"
          src="/images/sn-logo.webp"
          width={200}
          height={63}
          quality={100}
        />
      </div>
    </div>
  )
}
