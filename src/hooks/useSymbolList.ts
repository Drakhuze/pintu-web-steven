import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/constants/ApiService';
import { IApiResult, ISymbol } from '@/interfaces';

interface ISymbolListResponse extends IApiResult {
  data: ISymbol[];
}

export const fetchSymbolList = async (): Promise<ISymbolListResponse> => {
  return fetch(ApiService.symbolList).then((res) => res.json());
};

const useSymbolList = () => {
  const query = useQuery(['symbolList'], fetchSymbolList, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  return { ...query, responseData: query.data?.data as ISymbol[] };
};

export default useSymbolList;
