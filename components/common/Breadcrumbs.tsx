import { Container } from '@components/ui'
import Link from 'next/link'
import { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

interface LinkT {
  href: string
  name: string
  values?: any
}

interface Props {
  links?: LinkT[]
  onClick?: (_1: LinkT, _: number) => void
}

export const Breadcrumbs = ({ links, onClick }: Props) => {
  return (
    <div>
      <Container className="flex flex-wrap py-5 items-center gap-2.5 lg:gap-5 ">
        {links?.map((v, i) => (
          <Fragment key={i}>
            {i !== 0 && <p>{'＞'}</p>}
            {v.href ? (
              <Link href={v.href} passHref>
                <p className="cursor-pointer hover:underline whitespace-nowrap">
                  <FormattedMessage id={v.name} values={v.values} />
                </p>
              </Link>
            ) : (
              <p
                onClick={() => onClick?.(v, i)}
                className={
                  onClick
                    ? 'cursor-pointer whitespace-nowrap'
                    : 'whitespace-nowrap'
                }
              >
                <FormattedMessage id={v.name} values={v.values} />
              </p>
            )}
          </Fragment>
        ))}
      </Container>
    </div>
  )
}
