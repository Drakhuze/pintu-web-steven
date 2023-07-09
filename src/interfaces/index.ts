/* Pintu Interface */
export interface IApiResult {
  code: string;
  message: string;
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

/* Binance Interface */
export interface ITicker {
  symbol: string,
  priceChange: string,
  priceChangePercent: string,
  lastPrice: number,
  volume: string,
  highPrice: number,
  lowPrice: number,
}

export interface ISymbol {
  symbol: string,
  name: string,
  fullName: string,
  logo: string,
  price: number,
  volume: string,
  rank: number,
  tags: string[],
}

export interface IToken extends ISymbol {
  priceChangePercent: string,
  highPrice: number,
  lowPrice: number,
}

export interface ITag {
  name: string,
  tag: string
}
