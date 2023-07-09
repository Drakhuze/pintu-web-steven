import { TAGS } from "@/constants";
import { ITag } from "@/interfaces";
import Badge from "../Badge";

interface ITagsProps {
  setSelectedBadge: any;
}

const Tags = ({ setSelectedBadge }: ITagsProps) => (
  <div className="flex m-4 justify-start overflow-x-auto scrollbar">
    {TAGS.map((item: ITag) => (
      <Badge
        key={item.tag}
        text={item.name}
        tag={item.tag}
        setSelectedBadge={setSelectedBadge}
      />
    ))}
  </div>
);
export default Tags