import React, { Dispatch, SetStateAction, memo } from 'react';

interface IBadgeProps {
  text: string;
  tag: string;
  setSelectedBadge: Dispatch<SetStateAction<string>>;
}

function Badge({ text, tag, setSelectedBadge }: IBadgeProps) {
  const handleSelectedBadge = () => {
    setSelectedBadge(tag);
  };

  return (
    <button
      type="button"
      className="mb-2 mr-2 cursor-pointer whitespace-nowrap rounded-xl border border-neutral-200 px-4 py-2 text-sm font-thin transition duration-200 ease-in-out hover:bg-slate-100 focus:bg-slate-300 active:bg-slate-200 dark:border-neutral-800 dark:hover:bg-slate-900 dark:focus:bg-slate-700 dark:active:bg-slate-800"
      onClick={handleSelectedBadge}
      aria-hidden="true"
    >
      {text}
    </button>
  );
}

export default memo(Badge);
