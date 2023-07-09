import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/constants/ApiService';
import { IApiResult, IPriceChanges } from '@/interfaces';

interface IPriceChangesResponse extends IApiResult {
  payload: IPriceChanges[]
}

const fetchPriceChanges = async (): Promise<IPriceChangesResponse> => {
  return fetch(ApiService.priceChanges).then(res => res.json());
}

const usePriceChanges = () => {
  const query = useQuery(['priceChanges'], fetchPriceChanges, {})
  return query;
}

export default usePriceChanges;