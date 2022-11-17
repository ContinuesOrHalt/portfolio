import { setLocaleApi } from '@config/axios'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { IntlProvider } from 'react-intl'

import messagesEN from './translations/en.json'
import messagesVi from './translations/vi.json'

const languages: any = {
  en: messagesEN,
  vi: messagesVi,
}

const I18nProvider: FC = ({ children }) => {
  const { locale = 'en' } = useRouter()
  const messages = languages[locale] || languages.en

  useEffect(() => {
    setLocaleApi(locale)
  }, [locale])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <>{children}</>
    </IntlProvider>
  )
}
export default I18nProvider
