import { debounce } from 'lodash'
import { useRef, useState } from 'react'
import Input, { InputProps } from './Input'

const DebounceInput: React.FC<InputProps> = ({
  onChange = () => {},
  value: defaultValue = '',
  ...props
}) => {
  const [value, setValue] = useState(defaultValue)
  const updateValue = useRef(debounce((text) => onChange(text), 1000))

  const handleOnChange = (text: string) => {
    setValue(text)
    updateValue.current(text)
  }
  return <Input onChange={handleOnChange} value={value} {...props} />
}

export default DebounceInput
