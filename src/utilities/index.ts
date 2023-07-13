import { USD_TO_IDR_DEFAULT } from '@/constants';

const usdToIdr = (value: number): number => value * USD_TO_IDR_DEFAULT;

export const formatCurrency = (value: number, maxFraction: number): string => {
  const result = usdToIdr(Number(value));
  const currencyFormatter = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: maxFraction,
  });
  return currencyFormatter.format(result);
};

export const formatPercentage = (value: number, maxFraction: number): string => {
  const currencyFormatter = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: maxFraction,
  });
  return currencyFormatter.format(Math.abs(value));
};
