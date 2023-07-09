import React from 'react';
import SearchIcon from '@/assets/SearchIcon';

interface ISearchBoxProps {
  value: string;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBox({ value, setSearchKey }: ISearchBoxProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="dark:text-white w-4 h-4" />
      </div>
      <input
        type="search"
        id="search"
        className="block lg:w-[400px] w-full rounded-sm border border-neutral-300 bg-white dark:border-neutral-800 dark:bg-black py-1 px-2 pl-10 outline-none transition ease-in-out hover:border-b-green-600 focus:border-b-green-500"
        placeholder="Cari aset di Pintu..."
        value={value}
        onChange={(e) => setSearchKey(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
