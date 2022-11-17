import { FC } from 'react'
import cn from 'classnames'
import s from './Footer.module.css'
import Link from '@components/ui/Link'
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'
import { Logo } from '@components/ui'
import { useRouter } from 'next/router'

const LinkSocialItem: FC<any> = ({ link }) => {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 lg:w-12 lg:h-12 block"
    >
      <Image src={link.icon} width={48} height={48} alt="" />
    </a>
  )
}

const Footer: FC = () => {
  const router = useRouter()
  const { formatMessage } = useIntl()
  const email = formatMessage({ id: 'app.email' })

  return (
    <footer className={cn(s.root, 'mt-15 py-5 lg:py-10')}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="flex-3">
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer w-fit mx-auto lg:mx-0"
          >
            <Logo size="sm" type="horizontal" />
          </div>

          <div className="flex gap-5 justify-center lg:justify-start lg:gap-10 mt-5">
            {/* {LINKS_SOCIAL.map((link) => (
              <LinkSocialItem key={link.href} link={link} />
            ))} */}
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start mt-5">
            <p className="italic">
              <FormattedMessage id="audit_by" />
            </p>
            {/* <Image src={interFi} alt="" /> */}
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary text-2xl">
            <FormattedMessage id="contact" />
          </p>

          <a href={`mailto:${email}`} className="mt-2 block hover:underline">
            {email}
          </a>

          <Link href="/blog" className="mt-2 block hover:underline">
            <FormattedMessage id="blog" />
          </Link>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary text-2xl">
            <FormattedMessage id="document" />
          </p>
          <Link href="/whitepaper" className="mt-2 block hover:underline">
            <FormattedMessage id="whitepaper" />
          </Link>
          <Link href="/pitch_deck" className="mt-2 block hover:underline">
            <FormattedMessage id="pitch_deck" />
          </Link>
          <a
            className="hover:underline mt-2 block"
            // href={LINK_AUDIT}
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage id="audit" />
          </a>
        </div>
      </div>

      <div className="mt-6 mx-auto line-primary" />

      <p className="text-lg mt-4 text-center">
        <FormattedMessage id="app.copyright" />
      </p>
    </footer>
  )
}

export default Footer
