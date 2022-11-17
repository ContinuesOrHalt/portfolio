import classNames from 'classnames'
import { map } from 'lodash'
import { FormattedMessage } from 'react-intl'

interface Tab {
  key: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  active: string
  onChange: (key: string) => void
  className?: string
}

export const Tabs = ({ tabs, active, onChange, className }: TabsProps) => {
  return (
    <div className={classNames('flex gap-4 lg:gap-8 items-end', className)}>
      {map(tabs, ({ key, label }) => (
        <div key={key} onClick={() => onChange(key)} className="cursor-pointer">
          <p
            className={active === key ? 'lg:text-2xl font-bold' : 'lg:text-xl'}
          >
            <FormattedMessage id={label} />
          </p>
        </div>
      ))}
    </div>
  )
}
