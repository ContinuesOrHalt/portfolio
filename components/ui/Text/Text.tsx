import React, { FunctionComponent, JSXElementConstructor } from 'react'
import cn from 'classnames'
import s from './Text.module.css'
import { FormattedMessage } from 'react-intl'

interface TextProps {
  variant?: Variant
  children?: React.ReactNode | any
  id: string
  [_: string]: any
}

type Variant =
  | 'base'
  | 'heading'
  | 'pageHeading'
  | 'sectionHeading'
  | 'labelInput'

const Text: FunctionComponent<TextProps> = ({
  className = '',
  variant = 'base',
  children,
  id,
  ...props
}) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string
  } = {
    base: 'p',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
    labelInput: 'p',
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!]

  return (
    <Component className={cn(s.root, s[variant], className)} {...props}>
      <FormattedMessage id={id} />
    </Component>
  )
}

export default Text
