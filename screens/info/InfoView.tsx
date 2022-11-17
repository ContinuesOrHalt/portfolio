import { LINKS_SOCIAL } from '@lib/links'
import { FormattedMessage } from 'react-intl'

export default function InfoView() {
  return (
    <div className="mt-60 text-center">
      <h1 className="font-bold text-3xl lg:text-5xl">
        <FormattedMessage id="info.title" />
      </h1>
      <div className="mt-8 w-fit mx-auto space-y-5 text-primary">
        {LINKS_SOCIAL.map(({ label, href, logo: Logo }) => (
          <a
            key={href}
            className="flex items-center gap-5 underline cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
