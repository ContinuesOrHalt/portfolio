import Image, { ImageProps } from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import images from '@lib/intl/images'

interface Props extends ImageProps {
  id: string
}

export const FormattedMoney: FC<Props> = ({ id, ...props }) => {
  const { locale = 'en' } = useRouter()
  const imgs = images[locale] || images.en

  return <Image alt="" {...props} src={imgs[id]} />
}
