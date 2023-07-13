import { formatCurrency } from '@/utilities';
import { useEffect, useState } from 'react';
import Skeleton from '../Skeleton';

interface IAnimatedNumberProps {
  number: number;
  skeletonClass?: string;
}

const AnimatedNumber = ({ number, skeletonClass }: IAnimatedNumberProps) => {
  const [prevNumber, setPrevNumber] = useState(number);
  const [numberClass, setNumberClass] = useState('text-black dark:text-white');
  const formattedPrice = formatCurrency(number, 0);

  useEffect(() => {
    setPrevNumber(number);
    if (Number(prevNumber) !== Number(number)) {
      if (Number(prevNumber) < Number(number)) {
        setNumberClass('text-green-500');
      } else if (Number(prevNumber) > Number(number)) {
        setNumberClass('text-red-500');
      }
      setTimeout(() => {
        setNumberClass(`text-black dark:text-white transition ease-linear duration-500`);
      }, 500);
    }
  }, [number, prevNumber]);

  return <span className={numberClass}>{number !== undefined ? `Rp ${formattedPrice}` : <Skeleton className={`${skeletonClass} h-5 w-28`} />}</span>;
};
export default AnimatedNumber;
