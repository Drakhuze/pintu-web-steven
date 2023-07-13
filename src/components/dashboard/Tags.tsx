import { TAGS } from '@/constants';
import { ITag } from '@/interfaces';
import Badge from '../Badge';
import { Dispatch, SetStateAction } from 'react';

interface ITagsProps {
  setSelectedBadge: Dispatch<SetStateAction<string>>;
}

const Tags = ({ setSelectedBadge }: ITagsProps) => (
  <div className="scrollbar m-4 flex justify-start overflow-x-auto">
    {TAGS.map((item: ITag) => (
      <Badge key={item.tag} text={item.name} tag={item.tag} setSelectedBadge={setSelectedBadge} />
    ))}
  </div>
);
export default Tags;
