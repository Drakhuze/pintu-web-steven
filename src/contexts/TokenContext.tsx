import { IToken } from '@/interfaces';
import { createContext, useEffect, useMemo, useState } from 'react';
import useSymbolList from '@/hooks/useSymbolList';
import useTicker from '@/hooks/useTicker';

interface ITokenContext {
  tokenList: IToken[];
  symbolListLoading: boolean;
  tickerLoading: boolean;
}

export const TokenContext = createContext<ITokenContext>({
  tokenList: [],
  symbolListLoading: false,
  tickerLoading: false,
});

export const TokenProvider = ({ children }: { children: JSX.Element }) => {
  const { isLoading: symbolListLoading, responseData: symbolListData } = useSymbolList();
  const { isLoading: tickerLoading, responseData: tickerData } = useTicker();

  const tokenList = useMemo(() => {
    if (symbolListData === undefined) return [];
    const combinedData = symbolListData?.map((item) => {
      const price = tickerData[item.symbol];
      return {
        ...item,
        price: price?.lastPrice,
        priceChangePercent: price?.priceChangePercent,
        highPrice: price?.highPrice,
        lowPrice: price?.lowPrice,
      };
    });
    combinedData?.sort((a, b) => {
      if (a.rank === null) return 1;
      if (b.rank === null) return -1;
      return a.rank < b.rank ? -1 : 1;
    });
    return combinedData;
  }, [symbolListData, tickerData]);

  return <TokenContext.Provider value={{ tokenList, symbolListLoading, tickerLoading }}>{children}</TokenContext.Provider>;
};
