import { FC, memo, useEffect } from 'react'
import cn from 'classnames'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'

interface Props {
  className?: string
  id?: string
  isHome?: boolean
}

const Searchbar: FC<Props> = ({ className, id = 'search', isHome }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return (
    <div
      className={cn(
        s.root,
        className,
        isHome
          ? 'bg-bg-input border-bd-input'
          : 'bg-neutral-80 border-neutral-80'
      )}
    >
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder="Tìm kiếm tên game..."
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
      <div className={s.iconContainer}>
        <svg className={s.icon} fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7.5" stroke="#F1F2F2" strokeWidth="1.8" />
          <path
            d="M21 21L15.5 15.5"
            stroke="#F1F2F2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default memo(Searchbar)
