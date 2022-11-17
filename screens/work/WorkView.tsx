import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

const PROJECTS = [
  {
    time: '2022',
    name: '88token',
    href: 'https://88token.io/',
    tech: '(React Js, Next Js, ...)',
  },
  {
    time: '2021',
    name: 'Atastay',
    href: 'https://www.atastay.com/',
    tech: '(React Js, Next Js, Node Js, Redis, Stripe, ...)',
  },
  {
    time: '2020',
    name: 'EZBizTrip',
    href: 'https://www.ezbiztrip.com/',
    tech: '(NodeJs, React Js, Mongodb, ...)',
  },
  {
    time: '2019',
    name: 'Fly where',
    href: '',
    tech: '(VueJS, VueX, ...)',
  },
  {
    time: '2019',
    name: 'Tg 3.0',
    href: 'https://play.google.com/store/apps/details?id=com.dronexchange.flywhere',
    tech: '(React Native, Firebase, ...)',
  },
  {
    time: '2018',
    name: 'VSchool',
    href: '',
    tech: '(React JS, React Native, Node Js, ...)',
  },
  {
    time: '2018',
    name: 'Lang Master',
    href: '',
    tech: '(React Native, Node Js, ...)',
  },
]

export default function WorkView() {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="font-bold text-3xl lg:text-5xl">
        <FormattedMessage id="work.title" />
      </h1>
      <div className="mt-8 space-y-8 ">
        {PROJECTS.map(({ name, href, time, tech }) => (
          <div key={href} className="md:flex gap-5 items-end">
            <p>{time}</p>

            <p
              onClick={() => !!href && window.open(href, '_blank')}
              className={classNames(
                ' text-4xl font-bold text-primary',
                href && 'underline cursor-pointer'
              )}
            >
              {name}
            </p>
            <p>{tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
