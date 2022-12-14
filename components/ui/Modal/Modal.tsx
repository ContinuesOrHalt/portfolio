import { FC, useRef, useEffect, useCallback } from 'react'
import s from './Modal.module.css'
import FocusTrap from '@lib/focus-trap'
// import { Cross } from '@components/icons'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { FiX } from 'react-icons/fi'
import classNames from 'classnames'

interface ModalProps {
  className?: string
  children?: any
  onClose: () => void
  onEnter?: () => void | null
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div className={s.root}>
      <div
        className={classNames(s.modal, 'animated-fade-in')}
        role="dialog"
        ref={ref}
      >
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className={s.close}
        >
          <FiX className="h-6 w-6" />
        </button>
        <div className="overflow-auto flex-1 scroll-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Modal
