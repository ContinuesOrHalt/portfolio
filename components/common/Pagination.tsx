import { useMemo } from 'react'
import classNames from 'classnames'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Pagination({
  total = 0,
  active = 1,
  perPage = 10,
  onChange = (i: number) => {},
  className = '',
}) {
  const { totalPage, paginations } = useMemo(() => {
    const ttPage = Math.ceil(total / perPage)

    let pagArr
    if (ttPage > 7) {
      const i0 = 1
      let i1, i2, i3, i4, i5
      const i6 = ttPage

      switch (active) {
        case 1:
        case 2:
        case ttPage - 1:
        case ttPage:
          i1 = 2
          i2 = 3
          i3 = '...'
          i4 = ttPage - 2
          i5 = ttPage - 1
          break
        case 3:
          i1 = 2
          i2 = 3
          i3 = 4
          i4 = '...'
          i5 = ttPage - 1
          break

        case ttPage - 2:
          i1 = 2
          i2 = '...'
          i3 = ttPage - 3
          i4 = ttPage - 2
          i5 = ttPage - 1
          break

        default:
          i1 = '...'
          i2 = active - 1
          i3 = active
          i4 = active + 1
          i5 = '...'
          break
      }

      pagArr = [i0, i1, i2, i3, i4, i5, i6]
    } else {
      pagArr = [...new Array(ttPage)].map((v, i) => i + 1)
    }

    return {
      totalPage: ttPage,
      paginations: pagArr,
    }
  }, [total, perPage, active])

  const onNext = () => {
    if (active < totalPage) {
      onChange(active + 1)
    }
  }
  const onPrevious = () => {
    if (active > 1) {
      onChange(active - 1)
    }
  }

  const onSelect = (index: number) => () => {
    onChange(index)
  }
  return (
    <div className={classNames('flex items-center justify-center', className)}>
      <nav
        className="flex lg:hidden text-sm border divide-x text-center bg-bg-secondary items-center h-12 rounded"
        aria-label="Pagination"
      >
        <button
          disabled={active === 1}
          onClick={onPrevious}
          className="focus:outline-none px-4 h-full"
        >
          <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="h-full flex items-center">
          <p className="px-10">
            {active}/{totalPage}
          </p>
        </div>

        <button
          onClick={onNext}
          disabled={active === totalPage}
          className="focus:outline-none px-4 h-full"
        >
          <FiChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <nav
        className="hidden lg:flex rounded md:items-center space-x-4"
        aria-label="Pagination"
      >
        <button
          disabled={active === 1}
          onClick={onPrevious}
          className="inline-flex items-center text-center justify-center h-9 w-9 border rounded focus:outline-none"
        >
          <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        {paginations.map((item: any, index) => {
          const isActive = item === active
          const isDisabled = isNaN(item)
          return (
            <button
              onClick={onSelect(item)}
              key={item + '_' + index}
              disabled={isActive || isDisabled}
              className={classNames(
                'inline-flex items-center text-center justify-center focus:outline-none',
                isDisabled ? 'cursor-text bg-transparent' : 'cursor-pointer h-9 w-9 border rounded',
                isActive
                  ? `bg-primary border-primary`
                  : 'bg-bg-secondary border-bg-secondary'
              )}
            >
              {item}
            </button>
          )
        })}

        <button
          onClick={onNext}
          disabled={active === totalPage}
          className="inline-flex items-center text-center justify-center h-9 w-9 border rounded focus:outline-none"
        >
          <FiChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
    </div>
  )
}
