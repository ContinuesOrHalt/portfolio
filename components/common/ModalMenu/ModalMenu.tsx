import { Logo, useUI } from '@components/ui'
import Link from '@components/ui/Link'
import { LANGUAGES } from '@lib/constants'
import { LINKS_MENU } from '@lib/links'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import classNames from 'classnames'
import { map } from 'lodash'
import { useRouter } from 'next/router'
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi'
import { FormattedMessage } from 'react-intl'

const Language: FC<any> = () => {
  const { locale = 'en', asPath, pathname, replace } = useRouter()
  const [isShow, setShow] = useState(false)
  const { closeModal } = useUI()

  const selectLang = (lang: string) => {
    setShow(false)
    closeModal()
    replace(pathname, asPath, { locale: lang })
  }

  return (
    <div className="border-t border-gray-400 text-center mt-6">
      <div
        className="flex gap-2 items-center justify-center"
        onClick={() => setShow(!isShow)}
      >
        <p className="font-bold py-2">{LANGUAGES[locale] || locale}</p>
        <FiChevronDown className="w-6 h-6" />
      </div>
      {isShow && (
        <div className="space-y-2">
          {map(LANGUAGES, (lang, key) => (
            <p
              className={classNames('text-sm', key === locale && 'text-active')}
              onClick={() => selectLang(key)}
            >
              {lang}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

const LinkItem: FC<any> = ({ link }) => {
  const { pathname } = useRouter()

  return (
    <Link href={link.href}>
      <p
        className={classNames(
          'font-bold text-center p-2 text-xl',
          pathname === link.href && 'text-active'
        )}
      >
        <FormattedMessage id={link.label} />
      </p>
    </Link>
  )
}

export const ModalMenu = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>
  const { closeModal } = useUI()

  useEffect(() => {
    const modal = ref.current
    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] bg-bg z-50 pt-5 pb-0 px-4 flex flex-col">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="cursor-pointer" onClick={() => closeModal()}>
          <FiX className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-10" ref={ref}>
        <div className="mx-auto max-w-[500px]">
          <div onClick={() => closeModal()} className="space-y-5">
            {LINKS_MENU.map((link) => (
              <LinkItem key={link.href} link={link} />
            ))}
          </div>
          <Language />
        </div>
      </div>
    </div>
  )
}
