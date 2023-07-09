export interface IApiResult {
  code: string;
  message: string;
  payload: any;
}

export interface ISupportedCurrencies {  
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: IWallet[]
}

interface IWallet {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: string;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
}

export interface IPriceChanges {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}