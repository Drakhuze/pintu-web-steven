import { IToken } from '@/interfaces';
import Token from './Token';
import { TABLE_CRYPTO_HEADER } from '@/constants';
import Table, { ITableHeader } from '../Table';

interface ITokenTableProps {
  tokenList: IToken[];
  symbolListLoading: boolean;
}

const TokenTable = ({ tokenList, symbolListLoading }: ITokenTableProps) => {
  if (symbolListLoading) return <div />;
  const tableHeader = TABLE_CRYPTO_HEADER as ITableHeader[];
  const tableRow = tokenList.map((item: IToken) => <Token key={item.name} row={item} />);
  return (
    <div className="m-4">
      <Table headerList={tableHeader} data={tableRow} />
    </div>
  );
};

export default TokenTable;
