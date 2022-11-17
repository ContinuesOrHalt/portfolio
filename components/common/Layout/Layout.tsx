import cn from 'classnames'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { MODAL_VIEWS, useUI } from '@components/ui/context'
import { Navbar, Footer } from '@components/common'
import { Container, LoadingDots, Logo } from '@components/ui'
import s from './Layout.module.css'
import { ModalMenu } from '../ModalMenu/ModalMenu'
import ModalConfirm from '../ModalConfirm'
import ModalLoading from '../ModalLoading'
import { useRouter } from 'next/router'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
}) as FC<any>

interface Props {}

const ModalView: FC<{ modalView: MODAL_VIEWS; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  if (modalView === 'MENU') return <ModalMenu />

  const modalContent = () => {
    switch (modalView) {
      default:
        return <></>
    }
  }

  return <Modal onClose={closeModal}>{modalContent()}</Modal>
}

export const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()

  if (!displayModal) return <></>

  return <ModalView modalView={modalView} closeModal={closeModal} />
}

const Layout: FC<Props | any> = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <Navbar />

      <main className="fit bg-bg">
        <Container>
          {children}
          <Footer />
        </Container>
      </main>

      <ModalUI />
      <ModalConfirm />
      <ModalLoading />
    </div>
  )
}

export const LayoutSignIn: FC<Props | any> = ({ children }) => {
  const router = useRouter()

  return (
    <div className={cn(s.root)}>
      <main className="fit flex h-[100vh] w-[100vw] overflow-hidden">
        <div className="flex-1 overflow-y-auto scroll-hidden h-[100vh]">
          <Container>
            <div onClick={() => router.push('/')} className="cursor-pointer">
              <Logo className="mb-10" />
            </div>
            <div className="max-w-[415px] mx-auto">{children}</div>
          </Container>
        </div>
        <div className="hidden lg:block flex-1 bg-login" />
      </main>
    </div>
  )
}

export default Layout
