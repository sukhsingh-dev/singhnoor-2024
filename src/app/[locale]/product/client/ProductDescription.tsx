/* eslint-disable react/destructuring-assignment */

'use client'

import { useState } from 'react'
import InnerHtml from './InnerHtml'

interface ProductDescriptionTypes {
  text: string
}

const ProductDescription = ({ text }: ProductDescriptionTypes): React.ReactNode => {
  const truncateLength = 50
  const [isExpanded, setIsExpanded] = useState(false)
  const truncatedText = text.split(' ').slice(0, truncateLength).join(' ')
  const displayText = isExpanded ? text : `${truncatedText}...`

  return (
    <>
      <InnerHtml
        className="sn-product-page-description"
        data={displayText}
      />
      {text.split(' ').length > truncateLength && (
        <button className="btn-read-more" type="button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </>
  )
}

export default ProductDescription
