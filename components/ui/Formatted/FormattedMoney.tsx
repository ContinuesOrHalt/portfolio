import { FormattedNumber } from 'react-intl'

export const FormattedMoney = ({
  value = 0,
  currency = 'USD',
  fraction = 2,
}) => (
  <FormattedNumber
    style="currency"
    value={value}
    currency={currency}
    minimumFractionDigits={fraction}
    maximumFractionDigits={fraction}
  />
)
