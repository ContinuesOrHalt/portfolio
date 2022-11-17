import classNames from 'classnames'
import React, { FC, useEffect, useMemo, useState } from 'react'
const regNumber = /^\d+$/

interface Props {
  onChange?: (_: string) => void
  className?: string
}

const InputOtp: FC<Props> = ({ onChange, className }) => {
  const [otpCodes, setOtpCodes] = useState([])

  useEffect(() => {
    const otp = otpCodes.join('')
    onChange?.(otp)
  }, [otpCodes])

  const refIp: Array<any> = useMemo(() => {
    const refNum1 = React.createRef()
    const refNum2 = React.createRef()
    const refNum3 = React.createRef()
    const refNum4 = React.createRef()
    const refNum5 = React.createRef()
    const refNum6 = React.createRef()
    return [refNum1, refNum2, refNum3, refNum4, refNum5, refNum6]
  }, [])

  const onKeyPressIp = (k: number) => (e: any) => {
    const otpCodesTpm: any = [...otpCodes]

    if (regNumber.test(e.key)) {
      otpCodesTpm[k] = Number(e.key)
      setOtpCodes(otpCodesTpm)
      if (k < 5) refIp[k + 1].current.focus()
      else if (k == 5) refIp[5].current.blur()
    } else if (e.key === 'Backspace') {
      if (!!otpCodesTpm[k] || otpCodesTpm[k] === 0) {
        otpCodesTpm[k] = ''
      } else {
        if (k != 0) {
          otpCodesTpm[k - 1] = ''
          refIp[k - 1].current?.focus?.()
        }
      }
      setOtpCodes(otpCodesTpm)
    } else if (e.key === 'ArrowRight') {
      if (k != 5) refIp[k + 1].current?.focus?.()
    } else if (e.key === 'ArrowLeft') {
      if (k != 0) refIp[k - 1].current?.focus?.()
    }
  }

  const onPaste = (e: any) => {
    const value = e.clipboardData.getData('Text')
    if (!!value && regNumber.test(value)) {
      let otp = value.substring(0, 6)
      const otpP: any = otp.split('')
      setOtpCodes(otpP)
    }
  }

  return (
    <div className={classNames('flex gap-4 sm:gap-6 w-fit', className)}>
      {[...new Array(6)].map((v, k) => (
        <input
          key={k}
          ref={refIp[k]}
          maxLength={1}
          value={otpCodes[k]}
          readOnly
          onKeyDown={onKeyPressIp(k)}
          onPaste={onPaste}
          className="w-10 h-10 sm:w-11 sm:h-11 border text-center font-bold rounded"
        />
      ))}
    </div>
  )
}
export default InputOtp
