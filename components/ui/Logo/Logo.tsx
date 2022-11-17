import Image from 'next/image'
import cn from 'classnames'
import s from './Logo.module.css'
import { FC, useMemo } from 'react'
import logoBlack from '@assets/images/logo_black.png'
import logoWhite from '@assets/images/logo_white.png'
import { useTheme } from 'next-themes'

interface Props {
  className?: string
}

const Logo: FC<Props> = ({ className }) => {
  const { theme } = useTheme()

  const [logoFull] = useMemo(() => {
    switch (theme) {
      case 'dark':
        return [logoWhite]
      case 'light':
      default:
        return [logoBlack]
    }
  }, [theme])

  const rootClassName = cn(s.root, 'h-[50px]', className)

  return (
    <div className={rootClassName}>
      <Image
        src={logoFull}
        alt="Logo"
        height={50}
        width={150}
        objectFit="contain"
      />
    </div>
  )
}

export default Logo
