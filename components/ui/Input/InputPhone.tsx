import cn from 'classnames'
import React from 'react'
import Input from './Input'

const COUNTRY_CODES = ['84', '85']

const InputPhone: React.FC<any> = ({
  nameCC = 'phoneCountryCode',
  valueCC,
  onChangeCC = () => {},
  onBlurCC = () => {},
  className,
  ...props
}) => {
  return (
    <div className={cn(className, 'w-full relative h-auto flex items-center')}>
      <div>
        <select
          className="text-neutral-80 w-24 h-10.5 rounded-l border border-neutral-20 px-4 focus:outline-none focus:shadow-sm"
          value={valueCC}
          onChange={onChangeCC}
          onBlur={onBlurCC}
          name={nameCC}
        >
          {COUNTRY_CODES.map((v) => (
            <option key={v} value={v}>
              +{v}
            </option>
          ))}
        </select>
      </div>

      <Input
        {...props}
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      />
    </div>
  )
}

export default InputPhone
