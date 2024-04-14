import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../Icon'
import './modal.sass'

interface ModalType {
  modalClose: (state: boolean) => void
  modalBody: string | React.ReactNode
  modalHeading?: string | React.ReactNode
  modalFooter?: string | React.ReactNode
  className?: string
  time?: number
  type?: string
}

const Modal: React.FC<ModalType> = ({ modalHeading = '', modalBody, modalFooter = '', className = '', time = 0, type = '', modalClose }): JSX.Element => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (time !== undefined && time > 0) {
      const timeout = setTimeout(() => {
        modalClose(false)
      }, time)
      return () => clearTimeout(timeout)
    }
  }, [modalClose, time])

  return ReactDOM.createPortal(
    <div className={`sn-modal ${className} ${type}`}>
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
          modalFooter !== '' &&
          <div className="sn-modal-footer">{modalFooter}</div>
        }
        {
          time !== 0 &&
          <div className="sn-modal-time" style={{ animationDuration: `${time}ms` }} />
        }
      </div>
    </div>,
    document.body
  )
}

export default Modal
