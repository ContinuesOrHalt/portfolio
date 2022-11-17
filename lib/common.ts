import { forEach } from 'lodash'
import moment from 'moment'

export const imgLoader = ({ src }: any) => {
  if (`${src}`.indexOf('http') === 0) return src
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`
}

export const removeSpaceAndLowerText = (str = '') =>
  `${str}`.replace(/ /g, '').toLowerCase()

export const getFormikErr = (data: any) => {
  const errorData: any = {}
  forEach(data, (v, k) => {
    errorData[k] = v + ''
  })
  return errorData
}

export const YEAR_OPTIONS = [...new Array(100)].map((v, i) => {
  const year = moment().subtract(i, 'y').format('Y')

  return { label: year, value: year }
})

export const MONTH_OPTIONS = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
  { label: 11, value: 11 },
  { label: 12, value: 12 },
]

export const getDaysOptions = (year: any, month: any) => {
  const daysInMonth = moment(`${year}-${month}`, 'Y-MM').daysInMonth()
  if (!daysInMonth) return []
  return [...new Array(daysInMonth)].map((v, i) => {
    const value = i + 1
    return { label: value, value }
  })
}

export const GENDER_OPTIONS = [
  { value: 1, label: 'male' },
  { value: 2, label: 'female' },
  { value: 0, label: 'no_selection' },
]
export const GENDER_OPTIONS_O: any = {
  1: 'male',
  2: 'female',
  0: 'no_selection',
}

export const inFuture = (date: any) => {
  const date_select = new Date(date)
  return date_select.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
}

export const midTrim = (string: String) => {
  return string.replace(/ +/g, ' ')
}
