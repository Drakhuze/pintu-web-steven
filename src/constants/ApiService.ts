const BASE_PINTU_API = 'https://api.pintu.co.id/v2';

export const ApiService = {
  priceChanges: `${BASE_PINTU_API}/trade/price-changes`,
  supportedCurrencies: `${BASE_PINTU_API}/wallet/supportedCurrencies`,
  symbolList: 'https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list',
  ticker: 'https://api.binance.com/api/v3/ticker/24hr',
};
