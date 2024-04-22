import Icon from '../../Icon'
import './qtyBtnInput.sass'

const QtyBtnInput = (): React.ReactNode => {
  return (
    <div className="sn-product-page-attribute qty">
      <span className="sn-product-page-attribute-heading">Qty:</span>
      <div className="attribute-qty">
        <button type="button" aria-label="increase product quantity by 1">
          <Icon name="add" width={18} height={18} />
        </button>
        <input type="text" defaultValue={1} />
        <button type="button" aria-label="decrease product quantity by 1">
          <Icon name="minus" width={18} height={2} />
        </button>
      </div>
    </div>
  )
}

export default QtyBtnInput
