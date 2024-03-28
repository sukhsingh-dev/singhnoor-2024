/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Icon from '../../Icon'
import './modal.sass'

interface ModalType {
  modalClose: (state: boolean) => void
  modalBody: string | React.ReactNode
  modalHeading?: string | React.ReactNode
  modalFooter?: string | React.ReactNode
  className?: string
}

const Modal = ({ modalHeading = '', modalBody, modalFooter = '', className = '', modalClose }: ModalType): React.ReactNode => (
  <div className={`sn-modal ${className}`}>
    <div className="sn-modal-inner">

      <div className="sn-modal-heading">
        {modalHeading}
        <button
          className="sn-modal-close"
          type="button"
          aria-label="close modal"
          onClick={() => modalClose(false)}
        >
          <Icon name="close" width={16} height={16} />
        </button>
      </div>
      <div className="sn-modal-body">{modalBody}</div>
      {
        modalFooter &&
        <div className="sn-modal-footer">{modalFooter}</div>
      }
    </div>
  </div>
)

export default Modal
