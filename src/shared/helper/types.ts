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
}

export interface SelectedStoreType {
  qty?: number
  size?: string | null
  color?: string | null
  material?: string | null
  work?: string | null
}

export interface InCartProductType {
  _id: string
  selected?: SelectedStoreType
}

export interface StoreBtnTypes extends InCartProductType {
  storeName: string
  btnClasses: string
}

export interface CartActionType {
  productId: string
  storeName: string
}

export interface CartContextType {
  cartProducts: InCartProductType[]
  wishlistProducts: InCartProductType[]
  addToCart: (productInfo: InCartProductType) => void
  addToWishList: (productInfo: InCartProductType) => void
  // getOneProduct: ({ productId, storeName }: CartActionType) => InCartProductType | undefined
  // updateOneProduct: ({ productId, storeName }: CartActionType) => void
  removeProduct: ({ productId, storeName }: CartActionType) => void
  // clearCart: (storeName: string) => void
}

export interface Select {
  value: string
  label: string
  __isNew__?: boolean
}

export interface Category extends Select {
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

export interface QuickMenusInnerTypes {
  isActive: boolean
  closeAction: (state: boolean) => void
  menuListBody: React.ReactNode

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

export interface QtyBtnInputTypes {
  qty: number
  setQty: (state: number) => void
}

export interface RadioInputType {
  id: string
  name: string
  value: string
  checkedInCart: string | undefined | null
  handleChange: (keyName: string, valueName: string) => void
}
