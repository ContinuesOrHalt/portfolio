import { FC, useMemo } from 'react'
import { useCustomer } from '@lib/api/auth'
import cn from 'classnames'
import Image from 'next/image'
import { imgLoader } from '@lib/common'

interface Props {
  className?: string
  width?: number
  url?: string
}

const Avatar: FC<Props> = ({ className = '', width = 100, url }) => {
  const { data: customer } = useCustomer()

  const urlImg = url != undefined ? url : customer?.avatar_image_url

  const style = useMemo(() => {
    return width ? { width, height: width } : {}
  }, [width])

  return (
    <div
      className={cn(
        className,
        'rounded-full bg-gray-b-1 overflow-hidden border border-gray-b-1'
      )}
      style={style}
    >
      {!!urlImg && (
        <Image
          src={urlImg}
          width={width || 100}
          height={width || 100}
          alt=""
          loader={imgLoader}
          objectFit="cover"
          className="rounded-full bg-gray-b-1 "
        />
      )}
    </div>
  )
}

export default Avatar
