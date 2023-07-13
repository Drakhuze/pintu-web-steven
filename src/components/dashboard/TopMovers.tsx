import { TOP_MOVERS_SIZE } from '@/constants';
import { TokenContext } from '@/contexts/TokenContext';
import { IToken } from '@/interfaces';
import { formatCurrency } from '@/utilities';
import { cloneDeep } from 'lodash';
import { useContext } from 'react';
import ChangePercentage from './ChangePercentage';
import TokenLogo from './TokenLogo';

const TopMovers = () => {
  const tokenContext = useContext(TokenContext);
  const topAllMovers = cloneDeep(tokenContext.tokenList);

  topAllMovers.sort((a, b) => {
    if (a.priceChangePercent === null) return -1;
    if (b.priceChangePercent === null) return 1;
    return Math.abs(Number(a.priceChangePercent)) < Math.abs(Number(b.priceChangePercent)) ? 1 : -1;
  });

  const topMovers = topAllMovers.slice(0, TOP_MOVERS_SIZE).map((item: IToken) => {
    const formattedPrice = formatCurrency(item.price, 0);

    return (
      <div key={item.symbol} className="m-2 ml-0 min-w-[150px] flex-grow cursor-pointer border border-neutral-200 p-2 hover:bg-gray-100 dark:border-neutral-800 dark:hover:bg-slate-900">
        <div className="flex items-center">
          <TokenLogo imageUrl={item.logo} bodyClass="min-h-[32px] min-w-[32px]" />
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pl-2 font-semibold">{item.name}</div>
        </div>
        <div className="flex items-center pt-1">
          <div className="text-sm font-light text-gray-600 dark:text-neutral-300">{`Rp ${formattedPrice}`}</div>
        </div>
        <ChangePercentage percentage={item.priceChangePercent} bodyClass="flex ml-auto items-center font-bold" />
      </div>
    );
  });

  return (
    <div className="m-4 mt-12">
      <span className="text-xl font-semibold">🔥 Top Movers (24 Jam)</span>
      <div className="scrollbar mt-4 flex justify-start overflow-x-auto">{topMovers}</div>
    </div>
  );
};
export default TopMovers;
