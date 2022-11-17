import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

export interface InfoItemProps {
  title: string
  content: string | any
}
const InfoItem: FC<InfoItemProps> = ({ title, content }) => {
  return (
    <div className="py-3.5 lg:py-5 lg:px-10 lg:flex text-smp">
      <p className="w-[150px] mr-10 font-bold whitespace-nowrap">
        <FormattedMessage id={title} />
      </p>
      <p className="whitespace-pre-line mt-0.5 lg:mt-0 flex-1">{content}</p>
    </div>
  )
}

export default InfoItem
