import classNames from 'classnames'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

interface Column {
  header: string
  accessor: string
  component?: FC<any>
}
interface Props {
  columns: Column[]
  data: any[]
  mainKey?: string
  footer?: any
  className?: string
}
const Table: FC<Props> = ({
  columns = [],
  data = [],
  mainKey = 'id',
  footer,
  className,
}) => {
  return (
    <table
      className={classNames(
        className,
        'w-full text-center bg-bg-secondary rounded overflow-hidden text-xl'
      )}
    >
      <thead className="bg-primary font-bold">
        <tr className=" border border-primary">
          {columns.map((col, i) => (
            <th scope="col" className="py-5 px-8 " key={i}>
              <FormattedMessage id={col.header} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-medium">
        {data.map((item, index) => (
          <tr key={item[mainKey] || index}>
            {columns.map((column, indexCol) => (
              <td
                key={column.accessor + '-' + indexCol}
                className="py-5 px-8 border border-primary"
              >
                {column.component ? (
                  <column.component
                    id={column.accessor}
                    index={indexCol}
                    value={item[column.accessor]}
                    row={item}
                    indexRow={index}
                  />
                ) : (
                  <p>{item[column.accessor]}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {!!footer && <tfoot className="bg-primary font-bold">{footer}</tfoot>}
    </table>
  )
}

export default Table
