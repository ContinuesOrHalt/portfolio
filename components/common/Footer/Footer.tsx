import { FC } from 'react'
import cn from 'classnames'
import s from './Footer.module.css'

const Footer: FC = () => {
  return <footer className={cn(s.root, 'mt-15 py-5 lg:py-10')}></footer>
}

export default Footer
