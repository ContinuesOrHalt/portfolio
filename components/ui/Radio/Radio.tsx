import cn from 'classnames'
import React, { useMemo } from 'react'
import { v4 as uuid } from 'uuid'
// import { Check } from '@components/icons'
import InputFormik from '../Input/InputFormik'
import { FormattedMessage } from 'react-intl'
import s from './Radio.module.css'

export interface InputProps {
  className?: string
  label?: string
  value?: boolean
  onChange: (value: boolean) => any
  size?: 'md' | 'lg'
}

const Radio: React.FC<InputProps> = ({
  className,
  onChange,
  label,
  value,
  size = 'md',
  ...rest
}) => {
  const id = useMemo(() => uuid(), [])

  return (
    <div
      className={cn('flex cursor-pointer w-min items-center', className)}
      onClick={() => onChange(!value)}
    >
      <input
        hidden
        type="checkbox"
        id={id}
        checked={value}
        readOnly
        {...rest}
      />
      <div
        className={cn(
          'rounded-full flex justify-center items-center border bg-white',
          s[size]
        )}
      >
        {value && <div className="rounded-full w-2.5 h-2.5 bg-primary" />}
      </div>
      {!!label && (
        <p className={cn('ml-2 whitespace-nowrap', s[size])}>
          <FormattedMessage id={label} />
        </p>
      )}
    </div>
  )
}

export const RadioFormik = ({ name, ...props }: any) => (
  <InputFormik
    name={name}
    inputTag={(p: any) => (
      <Radio
        value={p.value}
        onChange={(value) => props.handleChange({ target: { value, name } })}
      />
    )}
    {...props}
  />
)

export default Radio
