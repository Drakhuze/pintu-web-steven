import React, { memo } from 'react';

interface ISkeletonProps {
  className: string;
}

const Skeleton = ({ className }: ISkeletonProps) => (
  <div className="animate-pulse">
    <div className={`${className} bg-gray-300 dark:bg-gray-700 rounded-sm`} />
  </div>
);

export default memo(Skeleton);
