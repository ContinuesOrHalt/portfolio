import { Text } from '@components/ui'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

interface Props {
  title?: string
  desc?: string
  className?: string
  values?: any
}

export const TitlePage = ({ title, className }: Props) => {
  return (
    <div className={classNames('mb-6', className)}>
      {!!title && <Text variant="pageHeading" id={title} />}
    </div>
  )
}
export const TitlePageSignIn = ({ title, desc, className, values }: Props) => {
  return (
    <div className={classNames('mb-8', className)}>
      {!!title && <Text variant="pageHeading" id={title} values={values} />}

      {!!desc && (
        <p className="text-secondary mt-3">
          <FormattedMessage id={desc} values={values} />
        </p>
      )}
    </div>
  )
}
