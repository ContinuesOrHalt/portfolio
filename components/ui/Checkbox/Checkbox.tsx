import cn from 'classnames'
import React, { useMemo } from 'react'
import { v4 as uuid } from 'uuid'
// import { Check } from '@components/icons'
import InputFormik from '../Input/InputFormik'
import { FormattedMessage } from 'react-intl'
import { FiCheck } from 'react-icons/fi'

export interface InputProps {
  className?: string
  label?: string
  value?: boolean
  onChange: (value: boolean) => any
}

const Checkbox: React.FC<InputProps> = (props) => {
  const { className, onChange, label, value, ...rest } = props

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
          'w-6 h-6 flex justify-center items-center border bg-white rounded'
        )}
      >
        {value && <FiCheck className="w-5 h-5 text-active" />}
      </div>
      {!!label && (
        <p className="ml-2 whitespace-nowrap">
          <FormattedMessage id={label} />
        </p>
      )}
    </div>
  )
}

export const CheckboxFormik = ({ name, ...props }: any) => (
  <InputFormik
    name={name}
    inputTag={(p: any) => (
      <Checkbox
        label={p.label}
        value={p.value}
        onChange={(value) => props.handleChange({ target: { value, name } })}
      />
    )}
    {...props}
  />
)

export default Checkbox
