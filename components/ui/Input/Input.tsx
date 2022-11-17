import cn from 'classnames'
import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  variant?: 'primary'
  onChange?: (...args: any[]) => any
}

const Input: React.FC<InputProps> = ({
  className,
  children,
  onChange,
  variant = 'primary',
  maxLength = 255,
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
    <input
      className={rootClassName}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      maxLength={maxLength}
      {...rest}
    />
  )
}

export default Input
