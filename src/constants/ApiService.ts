const BASE_PINTU_API = 'https://api.pintu.co.id/v2'

export const ApiService = {
  priceChanges: `${BASE_PINTU_API}/trade/price-changes`,
  supportedCurrencies: `${BASE_PINTU_API}/wallet/supportedCurrencies`
};