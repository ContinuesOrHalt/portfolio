// import { Star } from '@components/icons'
import cn from 'classnames'

export default function Stars({
  size = 8,
  className = '',
  star = 0,
  onChange = (i: number) => {},
}) {
  return (
    <div className={cn('flex justify-center', className)}>
      {/* {[1, 2, 3, 4, 5].map((i) => (
        <Star
          className={cn(i <= star && 'text-warning', `w-${size} h-${size} cursor-pointer`)}
          key={i}
          onClick={() => onChange(i)}
        />
      ))} */}
    </div>
  )
}
