/* eslint-disable react/no-danger */

'use client'

interface InnterHtmlType {
  data: string
  className?: string
}

const InnerHtml = ({ data, className = "" }: InnterHtmlType): React.ReactNode => (
  <div className={className} dangerouslySetInnerHTML={{ __html: data }} />
)

export default InnerHtml
