import CaretDownIcon from '@/assets/CaretDownIcon';
import CaretUpIcon from '@/assets/CaretUpIcon';
import { formatPercentage } from '@/utilities';
import Skeleton from '../Skeleton';

interface IChangePercentageProps {
  percentage: string;
  bodyClass: string;
  skeletonClass?: string;
}

const ChangePercentage = ({ percentage, bodyClass, skeletonClass }: IChangePercentageProps) => {
  const formattedPercent = formatPercentage(Number(percentage), 2);
  const percentColor = Number(percentage) === 0 ? 'text-black dark:text-white' : Number(percentage) > 0 ? 'text-green-500' : 'text-red-500';

  return (
    <span className={`${percentColor} ${bodyClass}`}>
      {percentage !== undefined ? (
        <>
          {Number(percentage) > 0 && <CaretUpIcon className={`${percentColor} w-4`} />}
          {Number(percentage) < 0 && <CaretDownIcon className={`${percentColor} w-4`} />}
          {`${formattedPercent}%`}
        </>
      ) : (
        <Skeleton className="h-5 w-16" />
      )}
    </span>
  );
};
export default ChangePercentage;
