export interface Product {
  product: ProductType
}
export interface ProductType {
  _id: string
  productCategory: Category
  productSubCategory: Select
  productTitle: string
  productGender: Select[]
  productPrice: number
  productDescription: string
  productAdditional: string
  productImagesArray: string[]
  productStock: number
  productTags: Select[]
  productSize: Select[]
  productMaterial: Select[]
  productColors: Select[]
  productWork: Select[]
  // createdAt: time
  // updatedAt: time
  // __v: number
}

export interface StoreBtnTypes {
  productInfo: CartProductType
  storeName: string
  btnClasses: string
}

export interface CartProductType {
  _id: string
  productCategory: string
  productSubCategory: string
  productTitle: string
  productGender: Select[]
  productPrice: number
  productImagesArray: string
  productTags: Select[]
  productSize: Select[]
  productMaterial: Select[]
  productColors: Select[]
  productWork: Select[]
  productQty: number
  // createdAt: time
  // updatedAt: time
  // __v: number
}

export interface CartContextType {
  wishlistProducts: CartProductType[]
  cartProducts: CartProductType[]
  setCartProducts: React.Dispatch<React.SetStateAction<CartProductType[]>>
  addProduct: (product: CartProductType) => void
  addToWishList: (product: CartProductType) => void
  // removeProduct: (productId: string) => void
  // clearCart: () => void
}

export interface Select {
  value: string
  label: string
  __isNew__?: boolean
}

export interface Category {
  value: string
  label: string
  attr: Select[]
  subCategory: Select[]
}

export interface CategoryType {
  _id: string
  categoryName: string
  categoryBg: string
  categoryImg: string
  categoryAttributes: Select[]
  subCategory: Select[]
  // createdAt: time
  // updatedAt: time
  // __v: number
}

export interface ProductListTypes {
  outerClass: string
  heading: string
  moreLink: string
  listQuery: string
}

export interface InnerHtmlType {
  data: string
  className?: string
}

export interface SizeChartType {
  category: string
  children?: React.ReactNode
}

interface FilterTypes {
  filters: string | undefined
}

export interface SearchParam {
  searchParams: FilterTypes
}

export interface FilterCheckboxTypes {
  checkboxSearch: string
  checkboxName: string
}

export interface IconType {
  name: string
  className?: string
  width?: number
  height?: number
}

export interface FooterLinkType {
  mainText: string
  links: innerLinks[]
}

interface innerLinks {
  id: number
  url: string
  name: string
}

export interface QuickMenusTypes {
  langText: string
  currentLang: string
}

export interface LanguageChangeActionTypes {
  lang: string
  name: string
}

export interface ModalType {
  modalClose: (state: boolean) => void
  modalBody: string | React.ReactNode
  modalHeading?: string | React.ReactNode
  modalFooter?: string | React.ReactNode
  className?: string
  time?: number
  type?: string
}

export interface AttributeType {
  _id: string
  attributeName: string
  attributeOptions: Select[]
}
