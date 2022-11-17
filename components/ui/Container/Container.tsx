import cn from 'classnames'
import React, { FC, useMemo } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  const rootClassName = cn(className, {
    'mx-auto px-4 lg:px-25 max-w max-w-[1800px] mx-auto': !clean,
  })

  const Component: any = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
