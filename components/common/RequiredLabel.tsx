import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'
interface Props {
  children?: any
  classNameDesc?: string
}
export const RequiredLabel = ({ children, classNameDesc }: Props) => {
  return (
    <span
      className={classNames(
        'text-danger text-xxs ml-3.75 font-normal',
        classNameDesc
      )}
    >
      <FormattedMessage id="required.label" />
    </span>
  )
}
