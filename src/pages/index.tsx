import SearchBox from '@/components/SearchBox';
import { useContext, useState } from 'react';
import { TokenContext } from '@/contexts/TokenContext';
import TopMovers from '@/components/dashboard/TopMovers';
import Tags from '@/components/dashboard/Tags';
import TokenTable from '@/components/dashboard/TokenTable';

const Dashboard = () => {
  const { tokenList, symbolListLoading, tickerLoading } = useContext(TokenContext);
  const [searchKey, setSearchKey] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('');

  const filteredTokenList =
    tokenList === undefined
      ? []
      : tokenList?.filter((p, i) => {
          if (searchKey === '' && selectedBadge === '') return i < 100;
          if (selectedBadge === '') return p.name.toLowerCase().includes(searchKey.toLowerCase()) || p.fullName.toLowerCase().includes(searchKey.toLowerCase());
          return (p.name.toLowerCase().includes(searchKey.toLowerCase()) || p.fullName.toLowerCase().includes(searchKey.toLowerCase())) && p.tags.includes(selectedBadge);
        });

  const renderHeader = () => (
    <div className="m-4 mt-8 items-center lg:flex">
      <div className="mr-2 pb-4 text-left text-xl font-semibold md:text-2xl lg:pb-0 lg:text-3xl">Harga Crypto dalam Rupiah Hari Ini</div>
      <div className="ml-auto">
        <SearchBox value={searchKey} setSearchKey={setSearchKey} />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto">
      {renderHeader()}
      <TopMovers />
      <Tags setSelectedBadge={setSelectedBadge} />
      <TokenTable tokenList={filteredTokenList} symbolListLoading={symbolListLoading} />
    </div>
  );
};

export default Dashboard;
