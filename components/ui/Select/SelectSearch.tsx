import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { removeSpaceAndLowerText } from '@lib/common'
import { useOnClickOutside } from '@lib/hooks/hooks'
import Input from '../Input'
import InputFormik from '../Input/InputFormik'
import { find } from 'lodash'
import { FormattedMessage } from 'react-intl'
import { AiFillCaretDown } from 'react-icons/ai'

const Option = ({ option, active, onSelect }: any) => (
  <div
    key={option.value}
    className={classNames(
      'cursor-pointer select-none py-3 px-2 text-gray-900 hover:bg-gray-100',
      active ? 'bg-gray-100 font-bold' : ''
    )}
    onClick={() => onSelect(option)}
  >
    <span className="truncate">{option.label}</span>
  </div>
)

const Options = ({ options, onSelect, selected }: any) => {
  if (!options?.length)
    return (
      <p className="text-center my-5 text-secondary">
        <FormattedMessage id="no_data" />
      </p>
    )

  return options.map((option: any) => (
    <Option
      key={option.value}
      option={option}
      active={selected?.value === option.value}
      onSelect={onSelect}
    />
  ))
}

interface OptionProps {
  value: string
  label: string
}

interface Props {
  options: OptionProps[]
  selected?: OptionProps | null
  hideSearch?: boolean
  disabled?: boolean
  placeholder?: string
  onChange: (key: OptionProps) => void
}

export default function SelectSearch({
  options,
  selected,
  onChange,
  hideSearch,
  placeholder,
  disabled,
}: Props) {
  const [search, setSearch] = useState('')
  const [showOptions, setShowOptions] = useState(false)

  const refWrapper = useOnClickOutside(() => setShowOptions(false))

  const onSelect = (item: any) => {
    onChange(item)
    setShowOptions(false)
  }

  const optionsFiltered = useMemo(() => {
    if (!search) return options

    return options.filter((item: any) => {
      const txtSearch = removeSpaceAndLowerText(search)
      return (
        removeSpaceAndLowerText(item.label).indexOf(txtSearch) > -1 ||
        search.toUpperCase() === item.value
      )
    })
  }, [search, options])

  useEffect(() => {
    setSearch('')
  }, [showOptions])

  return (
    <div className="relative w-full" ref={refWrapper}>
      <div
        onClick={() => {
          if (disabled) return
          setShowOptions(true)
        }}
        className="py-2.5 px-4 w-full bg-white border rounded"
      >
        {selected?.label ? (
          <span className="block truncate">{selected.label}</span>
        ) : (
          <span className="block truncate text-gray-400">{placeholder}</span>
        )}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <AiFillCaretDown
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>

      {showOptions && (
        <div className="z-20 absolute top-0 w-full">
          <div className={classNames('w-full', hideSearch && 'invisible')}>
            <Input
              value={search}
              onChange={setSearch}
              placeholder={placeholder}
              autoFocus
            />
          </div>

          <div className="max-h-64 overflow-auto scroll-hidden bg-white border rounded shadow -mt-1">
            <Options
              options={optionsFiltered}
              onSelect={onSelect}
              selected={selected}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export const SelectFormik = ({ name, hideSearch, options, ...props }: any) => (
  <InputFormik
    name={name}
    inputTag={(p: any) => (
      <SelectSearch
        {...p}
        selected={find(options, (v) => v.value === p.value)}
        onChange={({ value }) =>
          props.handleChange({ target: { value, name } })
        }
        hideSearch={hideSearch}
        options={options}
      />
    )}
    {...props}
  />
)
