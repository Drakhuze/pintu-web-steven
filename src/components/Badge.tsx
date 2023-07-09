import React, { memo } from 'react';

interface IBadgeProps {
  text: string;
  tag: string;
  setSelectedBadge: any;
}

function Badge({ text, tag, setSelectedBadge }: IBadgeProps) {
  return (
    <button
      type="button"
      className="mr-2 mb-2 text-sm font-thin border border-neutral-200 dark:border-neutral-800 py-2 px-4 whitespace-nowrap rounded-xl cursor-pointer transition ease-in-out duration-200 hover:bg-slate-100 active:bg-slate-200 focus:bg-slate-300 dark:hover:bg-slate-900 dark:active:bg-slate-800 dark:focus:bg-slate-700"
      onClick={() => { setSelectedBadge(tag); }}
      aria-hidden="true"
    >
      {text}
    </button>
  );
}

export default memo(Badge);
