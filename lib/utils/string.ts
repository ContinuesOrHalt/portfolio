export const spliceZipCode: (code?: string) => string = (code = '') => {
  code = String(code)
  return `${code.slice(0, 3)}-${code.slice(3, 7)}`
}

export const clipTitle = (text: string) => {
  let title = text || '...'
  if (text?.length > 12) {
    title = (text || '').substring(0, 12) + '...'
  }
  return title
}

export const REGEX_PASSWORD =
  /^(?=.*[A-Z|a-z])(?=.*[0-9])(?=.*[@#\$%\^&\*])(?=.{8,})/

export const REGEX_PHONE_NUMBER = /^[0-9\-]{1,}[0-9\-]{0,15}$/

export const shortenWallet = (address?: string) => {
  if (address) return address.substring(0, 4) + '...' + address.slice(-6)
  return ''
}
