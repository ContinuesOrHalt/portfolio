import classNames from 'classnames'
import { map } from 'lodash'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

interface StepsProps {
  steps: string[]
  active: number
  className?: string
}

export const Steps: FC<StepsProps> = ({
  steps,
  active,
  className = 'w-full',
}) => {
  return (
    <div className={classNames('flex', className)}>
      {map(steps, (label, index) => {
        const step = index + 1
        const isActive = index < active
        const isEnd = step == steps.length
        return (
          <div key={step} className={!isEnd ? 'flex-1' : ''}>
            <p className="text-secondary text-sm">
              <FormattedMessage id="amount.step" values={{ step }} />
            </p>

            <p className="mt-0.5 text-sm truncate">
              <FormattedMessage id={label} />
            </p>

            <div className="flex items-center mt-1">
              <div
                className={classNames(
                  'w-4 h-4 rounded-full',
                  isActive ? 'bg-primary' : 'bg-white'
                )}
              />
              {!isEnd && (
                <div
                  className={classNames(
                    'flex-1 h-0.5',
                    active > index + 1 ? 'bg-primary' : 'bg-white'
                  )}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
