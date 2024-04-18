/* eslint-disable react/no-danger */

'use client'

import { type InnerHtmlType } from "@/shared/helper/types"

const InnerHtml = ({ data, className = "" }: InnerHtmlType): React.ReactNode => (
  <div className={className} dangerouslySetInnerHTML={{ __html: data }} />
)

export default InnerHtml
