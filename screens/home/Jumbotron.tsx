import { LINKS_SKILL } from '@lib/links'
import Image from 'next/image'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import img1 from '@assets/images/dd.jpg'
import Link from 'next/link'

const Jumbotron: FC = () => (
  <div
    className="lg:flex gap-9 mt-10 items-center"
    style={{ minHeight: 'calc(100vh - 200px)' }}
  >
    <div className="flex-2">
      <h1 className="font-bold text-3xl lg:text-5xl uppercase">
        <FormattedMessage id="author.name" />
      </h1>

      <p className="text-2xl mt-8 ">
        <FormattedMessage id="author.introduce" />
      </p>
      <div className="flex gap-5 mt-6 flex-wrap">
        {LINKS_SKILL.map(({ href, logo }) => (
          <a
            key={href}
            href={href}
            className="w-15 h-15 hover:scale-120 transition"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="im1" src={logo} objectFit="contain" />
          </a>
        ))}
      </div>
      <p className="text-2xl mt-6">
        <FormattedMessage id="author.quote" />
      </p>

      <Link href="/about" passHref>
        <div className="w-fit underline cursor-pointer mt-5 text-primary font-bold">
          <FormattedMessage id="learn_more" />
        </div>
      </Link>
    </div>

    <div
      className="flex-1 flex justify-center mt-10 lg:mt-0"
      data-aos="fade-down"
    >
      <div className="rounded-full overflow-hidden aspect-1 border-gray-300 border">
        <Image alt="im1" src={img1} objectFit="contain" />
      </div>
    </div>
  </div>
)

export default Jumbotron
