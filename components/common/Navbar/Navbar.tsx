import { Logo, useUI } from '@components/ui'
import Link from '@components/ui/Link'
import { LINKS_MENU } from '@lib/links'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import NavbarRoot from './NavbarRoot'
import { FiChevronDown, FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { map } from 'lodash'
import { LANGUAGES } from '@lib/constants'
import classNames from 'classnames'
import { useOnClickOutside } from '@lib/hooks/hooks'
import { useTheme } from 'next-themes'

const Language: FC<any> = () => {
  const { locale = 'en', asPath, pathname, replace } = useRouter()
  const [isShow, setShow] = useState(false)
  const ref = useOnClickOutside(() => setShow(false))

  const selectLang = (lang: string) => {
    setShow(false)
    replace(pathname, asPath, { locale: lang })
  }

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex gap-2 items-center cursor-pointer hover:text-active"
        onClick={() => setShow(!isShow)}
      >
        <p className="font-bold py-2">{locale}</p>
        <FiChevronDown className="w-6 h-6" />
      </div>
      {isShow && (
        <div className="absolute right-0 bg-bg-secondary rounded grid grid-cols-1 w-[150px] p-5 gap-5">
          {map(LANGUAGES, (lang, key) => (
            <p
              className={classNames(
                'hover:text-active cursor-pointer text-right font-bold',
                key === locale && 'text-active'
              )}
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

const SwitchTheme: FC<any> = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className=""
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FiMoon /> : <FiSun />}
    </div>
  )
}

const LinkItem: FC<any> = ({ link }) => {
  const { pathname } = useRouter()
  return (
    <div className="relative group">
      <Link href={link.href}>
        <p
          className={classNames(
            'font-bold hover:text-active py-2',
            pathname === link.href && 'text-active'
          )}
        >
          <FormattedMessage id={link.label} />
        </p>
      </Link>
    </div>
  )
}

const Navbar: FC = () => {
  const { openModal } = useUI()
  const router = useRouter()

  return (
    <NavbarRoot>
      <div className="hidden lg:flex justify-between items-center py-5 px-4 lg:px-25 max-w-[1800px] mx-auto">
        <div className="flex gap-5 items-center">
          <div onClick={() => router.push('/')} className="cursor-pointer">
            <Logo />
          </div>
        </div>
        <div className="flex gap-4 xl:gap-10 items-center">
          {LINKS_MENU.map((link) => (
            <LinkItem key={link.href} link={link} />
          ))}
          <Language />

          <SwitchTheme />
        </div>
      </div>
      <div className="flex lg:hidden p-5 justify-between items-center px-4">
        <div onClick={() => router.push('/')} className="cursor-pointer">
          <Logo />
        </div>

        <div className="" onClick={() => openModal('MENU')}>
          <FiMenu className="w-6 h-6" />
        </div>
      </div>
    </NavbarRoot>
  )
}

export default Navbar
