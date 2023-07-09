import CaretDownIcon from "@/assets/CaretDownIcon";
import CaretUpIcon from "@/assets/CaretUpIcon";
import { TOP_MOVERS_SIZE } from "@/constants";
import { TokenContext } from "@/contexts/TokenContext";
import { IToken } from "@/interfaces";
import { formatCurrency, usdToIdr, formatPercentage } from "@/utilities";
import _ from "lodash";
import { useContext } from "react";
import Skeleton from "../Skeleton";

const TopMovers = () => {
  const tokenContext = useContext(TokenContext);
  const topAllMovers = _.cloneDeep(tokenContext.tokenList);

  topAllMovers.sort((a, b) => {
    if (a.priceChangePercent === null) return -1;
    if (b.priceChangePercent === null) return 1;
    return Math.abs(Number(a.priceChangePercent))
      < Math.abs(Number(b.priceChangePercent)) ? 1 : -1;
  });

  const topMovers = topAllMovers.slice(0, TOP_MOVERS_SIZE).map((item: IToken) => {
    const percentColor = Number(item.priceChangePercent) === 0 ? 'text-white' : Number(item.priceChangePercent) > 0 ? 'text-green-500' : 'text-red-500';

    const formattedPrice = formatCurrency(usdToIdr(Number(item.price)), 0);
    const formattedPercent = formatPercentage(Number(item.priceChangePercent), 2);

    return (
      <div key={item.symbol} className="p-2 m-2 ml-0 border border-neutral-200 dark:border-neutral-800 flex-grow min-w-[150px] hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
        <div className="flex items-center">
          <div
            className="min-h-[32px] min-w-[32px] rounded-full border dark:border-neutral-800"
            style={{
              backgroundImage: `url('${item.logo}')`,
              backgroundSize: 'contain',
            }}
          />
          <div className="pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
            {item.name}
          </div>
        </div>
        <div className="flex items-center pt-1">
          <div className="font-light text-gray-600 dark:text-neutral-300 text-sm">
            {`Rp ${formattedPrice}`}
          </div>
        </div>
        <div className={`${percentColor} flex ml-auto items-center font-bold`}>
          {item.priceChangePercent !== undefined
            ? (
              <>
                {Number(item.priceChangePercent) > 0
                  ? <CaretUpIcon className={`${percentColor} w-4`} /> : Number(item.priceChangePercent) < 0
                  && <CaretDownIcon className={`${percentColor} w-4`} />}

                {`${formattedPercent}%`}
              </>
            )
            : <Skeleton className="h-5 w-16" />}
        </div>
      </div>
    );
  });

  return (
    <div className="m-4 mt-12">
      <span className="font-semibold text-xl">🔥 Top Movers (24 Jam)</span>
      <div className="flex justify-start mt-4 overflow-x-auto scrollbar">
        {topMovers}
      </div>
    </div>
  );
};

export default TopMovers;