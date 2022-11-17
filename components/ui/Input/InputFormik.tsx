import React from 'react'
import { get, pick } from 'lodash'
import Input from '.'
import { InputProps } from './Input'
import { FormattedMessage, useIntl } from 'react-intl'
import { midTrim } from '@lib/common'

export interface InputFormik extends InputProps {
  name: string
  trim?: boolean
  handleChange: any
  handleBlur: any
  touched: any
  errors: any
  values: any
  inputTag?: any
  [key: string]: any
}

const InputFormik: React.FC<InputFormik> = ({
  name,
  trim,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
  placeholder,
  inputTag: InputTag = Input,
  ...props
}) => {
  const { formatMessage } = useIntl()
  const message = get(touched, name) && get(errors, name)

  const _handleBlur = (e: any) => {
    if (trim && e.target.value) {
      e.target.value = midTrim(e.target.value.trim())
      handleChange(e)
    }
    handleBlur(e)
  }

  const _handleInput = (e: any) => {
    const target = e.target
    if (['zip_code', 'tel'].includes(target.name)) {
      target.value = target.value
        .replace(/[^0-9|-]/g, '')
        .replace(/(\..*?)\..*/g, '$1')
    }
  }

  return (
    <>
      <InputTag
        {...pick(props, [
          'min',
          'max',
          'type',
          'maxLength',
          'minLength',
          'pattern',
          'required',
          'size',
          'disabled',
          'step',
          'variant',
          'label',
          'accept',
          'rows',
          'style',
          'className',
          'id',
        ])}
        onInput={_handleInput}
        name={name}
        value={get(values, name) || ''}
        onChange={(v: string, e: any) => handleChange(e)}
        onBlur={_handleBlur}
        placeholder={placeholder ? formatMessage({ id: placeholder }) : ''}
      />
      {message && (
        <p className="text-sm text-danger pt-1">
          <FormattedMessage id={message} defaultMessage={message} />
        </p>
      )}
    </>
  )
}

export default InputFormik
