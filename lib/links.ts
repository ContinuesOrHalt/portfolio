import javascript from '@assets/images/logo/js.png'
import react from '@assets/images/logo/rn.png'
import vue from '@assets/images/logo/vue.png'
import next from '@assets/images/logo/next.jpg'
import css from '@assets/images/logo/css.png'
import tailwind from '@assets/images/logo/tw.png'
import node from '@assets/images/logo/node.png'
import nest from '@assets/images/logo/nest.svg'
import firebase from '@assets/images/logo/firebase.png'
import { FiLinkedin, FiMail } from 'react-icons/fi'

export const LINKS_MENU = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/work',
    label: 'work',
  },
  {
    href: '/info',
    label: 'info',
  },

  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
]

export const LINKS_SKILL = [
  { href: 'https://www.javascript.com/', logo: javascript },
  { href: 'https://reactjs.org/', logo: react },
  { href: 'https://vuejs.org/', logo: vue },
  { href: 'https://nextjs.org/', logo: next },
  { href: 'https://www.w3.org/Style/CSS/Overview.en.html', logo: css },
  { href: 'https://tailwindcss.com/', logo: tailwind },
  { href: 'https://nodejs.org/en/', logo: node },
  { href: 'https://nestjs.com/', logo: nest },
  { href: 'https://firebase.google.com/', logo: firebase },
]

export const LINK_LINKEDIN = 'https://www.linkedin.com/in/vu-hoan-76611119b/'
export const MY_EMAIL = 'continuesorhalt@gmail.com'

export const LINKS_SOCIAL = [
  { href: LINK_LINKEDIN, label: 'Linkedin', logo: FiLinkedin },
  { href: `mailto:${MY_EMAIL}`, label: MY_EMAIL, logo: FiMail },
]
