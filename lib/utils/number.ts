export const abbreviateNumber = (num = 0, fixed?: number) => {
  if (!num) return '0' // terminate early

  fixed = !fixed || fixed < 0 ? 0 : fixed // number of decimal places to show

  const b = num.toPrecision(2).split('e') // get power

  let k =
    b.length === 1 ? 0 : Math.floor(Math.min(Number(b[1].slice(1)), 14) / 3) // floor at decimals, ceiling at trillions

  const c = Number(
    k < 1
      ? num.toFixed(0 + fixed)
      : (num / Math.pow(10, k * 3)).toFixed(1 + fixed)
  ) // divide by power

  const d = c < 0 ? c : Math.abs(c) // enforce -0 is 0

  const e = d + ['', 'K', 'M', 'B', 'T'][k] // append power

  return e
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
})

export const formatMoney = (v = 0) => formatter.format(v)
