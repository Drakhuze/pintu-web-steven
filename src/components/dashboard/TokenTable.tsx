import { IToken } from "@/interfaces";
import Token from "./Token";
import { TABLE_CRYPTO_HEADER } from "@/constants";
import Table from "../Table";

interface ITokenTableProps {
  tokenList: IToken[];
  symbolListLoading: boolean;
}

interface ITokenTableHeader {
  id: number,
  title: string,
  width?: string,
  itemAlign?: 'left' | 'center' | 'right' | '',
}

interface ITableData {
  headerList: ITokenTableHeader[],
  data: JSX.Element[]
}

const TokenTable = ({ tokenList, symbolListLoading }: ITokenTableProps) => {
  if (!symbolListLoading) {
    const tableHeader = TABLE_CRYPTO_HEADER as ITokenTableHeader[];
    const tableRow = tokenList.map((item: IToken) => (
      <Token key={item.name} row={item} />
    ));
    return (
      <div className="m-4">
        <Table headerList={tableHeader} data={tableRow} />
      </div>
    );
  }
  return <div />;
};

export default TokenTable;