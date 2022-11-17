import cn from 'classnames'
import React, { useState } from 'react'
import Input, { InputProps } from './Input'
import { FiEye } from 'react-icons/fi'

const InputPassword: React.FC<InputProps> = ({ className, ...props }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={cn(className, 'w-full relative h-auto')}>
      <Input {...props} type={show ? 'text' : 'password'} />
      <FiEye
        className={cn(
          'cursor-pointer absolute right-4 top-4',
          show ? '' : 'text-disabled'
        )}
        onClick={() => setShow(!show)}
      />
    </div>
  )
}

export default InputPassword
