import { LINK_LINKEDIN } from '@lib/links'
import { FormattedMessage } from 'react-intl'

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React Js',
  'Next JS',
  'React Native',
  'Vue Js',
  'Node Js',
  'HTML & CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Mongo',
  'Mysql',
  'Redis',
  'Pm2',
  'Nginx',
  '...',
]

export default function AboutView() {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="font-bold text-3xl lg:text-5xl">
        <FormattedMessage id="about.title" />
      </h1>
      <div className="lg:flex gap-9 mt-8">
        <div className="flex-2">
          <p className="text-2xl whitespace-pre-line ">
            <FormattedMessage id="about.introduce" />
          </p>

          <a
            href={LINK_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="block mt-5 underline cursor-pointer text-primary font-bold"
          >
            <FormattedMessage id="see_detail_on_linkedin" />
          </a>
        </div>
        <div className="flex-1">
          <p className="text-2xl whitespace-pre-line ">
            <FormattedMessage id="about.my_skill" />
          </p>
          <div className="grid grid-cols-2 mt-8 gap-2">
            {SKILLS.map((v, i) => (
              <p className="text-xl text-primary" key={i}>
                + {v}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
