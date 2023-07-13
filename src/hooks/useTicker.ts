import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/constants/ApiService';
import { ITicker } from '@/interfaces';
import { TICKER_REFETCH_INTERVAL } from '@/constants';

interface ITickerResponse extends ITicker {}

export const fetchTicker = async (): Promise<ITickerResponse> => {
  return fetch(ApiService.ticker).then((res) => res.json());
};

const useTicker = () => {
  const query = useQuery(['ticker'], fetchTicker, {
    refetchInterval: TICKER_REFETCH_INTERVAL,
  });
  let responseData: Record<string, ITicker> = {};
  if (Array.isArray(query.data)) {
    query.data.forEach((item) => {
      return (responseData[item.symbol] = item);
    });
  }
  return { ...query, responseData };
};
export default useTicker;
