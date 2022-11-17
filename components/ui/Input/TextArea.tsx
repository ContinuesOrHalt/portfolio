import cn from 'classnames'
import s from './Input.module.css'
import React, { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  variant?: 'primary'
  onChange?: (...args: any[]) => any
}

const TextArea: React.FC<Props> = ({
  className,
  children,
  onChange,
  variant = 'primary',
  ...rest
}) => {
  const rootClassName = cn(s.root, { [s[variant]]: true }, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value, e)
    }
    return null
  }

  return (
    <textarea
      className={rootClassName}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      {...rest}
    />
  )
}

export default TextArea
