import React from 'react';

export interface ITableHeader {
  id: number;
  title: string;
  width?: string;
  itemAlign: 'left' | 'center' | 'right';
}

interface ITableProps {
  headerList: ITableHeader[];
  data: JSX.Element[];
}

function Table({ headerList, data }: ITableProps) {
  return (
    <div>
      <table className="datatable w-full table-fixed">
        <thead className="hidden lg:table-header-group">
          <tr>
            {headerList.map((item: ITableHeader) => (
              <th key={item.id} style={{ width: `${item.width}`, textAlign: `${item.itemAlign}` }}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.length > 0 && data.map((item: JSX.Element) => item)}</tbody>
      </table>
    </div>
  );
}

export default Table;
