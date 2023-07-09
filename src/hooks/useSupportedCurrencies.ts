import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/constants/ApiService';
import { IApiResult, ISupportedCurrencies } from '@/interfaces';

interface SupportedCurrenciesResponse extends IApiResult {
  payload: ISupportedCurrencies[]
}

const fetchSupportedCurrencies = async (): Promise<SupportedCurrenciesResponse> => {
  return fetch(ApiService.supportedCurrencies).then(res => res.json());
}

const useSupportedCurrencies = () => {
  const query = useQuery(['supportedCurrencies'], fetchSupportedCurrencies, {})
  return query;
}

export default useSupportedCurrencies