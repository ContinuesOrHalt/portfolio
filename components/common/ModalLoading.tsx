import { LoadingDots } from '@components/ui'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import {
  createRef,
  useState,
  useImperativeHandle,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react'

const ModalLoadingRef: any = createRef()

export const ShowLoading = {
  show: () => {
    ModalLoadingRef.current?.show?.()
  },
  hide: () => {
    ModalLoadingRef.current?.hide?.()
  },
}

export default function ModalLoading() {
  const [open, setOpen] = useState(false)
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  useImperativeHandle(ModalLoadingRef, () => ({
    show: () => {
      setOpen(true)
    },
    hide: () => {
      setOpen(false)
    },
  }))

  useEffect(() => {
    const modal = ref.current
    if (modal && open) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
    } else {
      clearAllBodyScrollLocks()
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed top-0 w-[100vw] h-[100vh] bg-white bg-opacity-50 z-50 flex justify-center items-center"
      ref={ref}
    >
      <div className="w-fit">
        <LoadingDots />
      </div>
    </div>
  )
}
