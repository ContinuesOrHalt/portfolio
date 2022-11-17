import { Button, Modal } from '@components/ui'
import { createRef, Fragment, useState, useImperativeHandle } from 'react'
import { FormattedMessage } from 'react-intl'
import { TitlePageSignIn } from './TitlePage'

const ModalConfirmRef: any = createRef()

interface Props {
  title?: string
  desc?: string
  labelCancel?: string
  labelAccept?: string
  onAccept?: () => void
  onCancel?: () => void
}

export const Confirm = {
  show: (payload: Props) => {
    ModalConfirmRef.current?.show?.(payload)
  },
  hide: () => {
    ModalConfirmRef.current?.hide?.()
  },
}

const initData: Props = {
  title: 'confirm',
  desc: 'confirm.are_you_sure',
  labelCancel: 'cancel',
  labelAccept: 'confirm',
  onAccept: () => {},
  onCancel: () => {},
}

export default function ModalConfirm() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(initData)

  const handleAccept = async () => {
    await data?.onAccept?.()
  }

  const handleCancel = () => {
    setOpen(false)
    data?.onCancel?.()
  }

  useImperativeHandle(ModalConfirmRef, () => ({
    show: (payload: Props) => {
      setData({ ...initData, ...payload })
      setOpen(true)
    },
    hide: () => {
      setOpen(false)
    },
  }))

  if (!open) return null
  return (
    <Modal onClose={handleCancel}>
      <div className="py-10">
        <TitlePageSignIn title={data.title} desc={data.desc} />
        <div className="flex gap-6 mt-8 max-w-[316px] ml-auto">
          <Button className="flex-1" onClick={handleCancel} variant="outline">
            <FormattedMessage id={data.labelCancel} />
          </Button>
          <Button className="flex-1" onClick={handleAccept}>
            <FormattedMessage id={data.labelAccept} />
          </Button>
        </div>
      </div>
    </Modal>
  )
}
