import cn from 'classnames'
import React, { useMemo } from 'react'
import s from './Switch.module.css'
import { v4 as uuid } from 'uuid'

const Switch: React.FC<any> = ({
  className,
  label,
  name = 'switchToggle',
  ...rest
}) => {
  const id = useMemo(() => uuid(), [])

  return (
    <div className={cn('', className)}>
      <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          id={id}
          name={name}
          className={cn(
            s.root,
            'absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-80'
          )}
          {...rest}
        />
        <label
          htmlFor={id}
          className={cn(
            s.label,
            'block overflow-hidden h-6 rounded-full bg-neutral-80 cursor-pointer'
          )}
        ></label>
      </div>
      {!!label && (
        <label htmlFor={id} className="ml-6 font-semibold truncate">
          {label}
        </label>
      )}
    </div>
  )
}

export default Switch
