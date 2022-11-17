import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import I18nProvider from '@lib/intl/I18nProvider'
import Aos from 'aos'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  // const title = (Component as any).title || ''
  // const breadcrumbs = (Component as any).breadcrumbs || []
  const Children = Component as any
  useEffect(() => {
    document.body.classList?.remove('loading')
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, [])

  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <Head />
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Children {...pageProps} />
          </Layout>
          <ToastContainer theme="light" />
        </ManagedUIContext>
      </QueryClientProvider>
    </I18nProvider>
  )
}
