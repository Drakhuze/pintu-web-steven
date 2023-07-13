import React from 'react';
import { IToken } from '@/interfaces';
import AnimatedNumber from './AnimatedNumber';
import ChangePercentage from './ChangePercentage';
import TokenLogo from './TokenLogo';

interface ITokenProps {
  row: IToken;
}

function Token({ row }: ITokenProps) {
  return (
    <>
      <tr key={row.name} className="token-lg hidden cursor-pointer font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 lg:table-row">
        <td>
          <TokenLogo imageUrl={row.logo} bodyClass="h-10 w-10" />
        </td>
        <td>{row.fullName}</td>
        <td className="text-neutral-500">{row.name}</td>
        <td className="text-left">
          <AnimatedNumber number={row.price} />
        </td>
        <td className="text-right">
          <ChangePercentage percentage={row.priceChangePercent} bodyClass="flex justify-end items-center" />
        </td>
        <td className="text-right">
          <AnimatedNumber number={row.lowPrice} skeletonClass="ml-auto" />
        </td>
        <td className="text-right">
          <AnimatedNumber number={row.highPrice} skeletonClass="ml-auto" />
        </td>
      </tr>

      <tr className="token-sm transtition flex cursor-pointer items-center font-semibold duration-200 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-900 lg:hidden">
        <td className="p-0">
          <TokenLogo imageUrl={row.logo} bodyClass="h-10 w-10" />
        </td>
        <td className="flex flex-col">
          <span>{row.fullName}</span>
          <span className="text-neutral-500">{row.name}</span>
        </td>
        <td className="ml-auto flex flex-col text-right">
          <div>
            <AnimatedNumber number={row.price} />
          </div>
          <div>
            <ChangePercentage percentage={row.priceChangePercent} bodyClass="flex justify-end items-center" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default Token;
