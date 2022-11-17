import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { InputProps } from './Input'
import { useUploadPhoto } from '@lib/api/upload'
import LoadingDots from '../LoadingDots'
import { FormattedMessage } from 'react-intl'

const InputFile: React.FC<InputProps> = ({
  className,
  onChange,
  value,
  disabled,
  type = 'avatar',
  accept = 'image/*',
  name,
  ...props
}) => {
  const { mutate: uploadPhoto, error, isLoading } = useUploadPhoto()

  const [err, setErr] = useState('')

  const message = useMemo(() => (error as any)?.message || err, [error, err])

  const _onChange = (e: any) => {
    const maxAllowedSize = 10 * 1024 * 1024
    if (e.target.files.length === 0) return
    if (
      !['image/png', 'image/jpeg', 'image/jpg'].includes(
        e.target.files[0]?.type
      )
    ) {
      e.target.value = ''
      setErr('invalid.file.format')
      return
    }
    if (e.target.files[0].size > maxAllowedSize) {
      e.target.value = ''
      setErr('invalid.file.max10mb')
      return
    }
    setErr('')
    uploadPhoto(
      { media: e.target.files, type },
      {
        onSuccess: (value) => {
          onChange?.(value, { target: { value, name } })
        },
      }
    )
  }

  return (
    <div className={cn(className, 'w-full relative h-auto')}>
      <input
        {...props}
        name={name}
        accept={accept}
        onChange={_onChange}
        type="file"
        disabled={isLoading || disabled}
        className={`${
          className?.split(' ')?.includes('isBtnImage') ? 'hidden' : ''
        } w-full`}
      />
      {isLoading && (
        <i className="pl-3 m-0 flex absolute top-3">
          <LoadingDots />
        </i>
      )}
      {message && (
        <p className="text-xs text-danger pt-1">
          <FormattedMessage id={message} defaultMessage={message} />
        </p>
      )}
    </div>
  )
}

export default InputFile
