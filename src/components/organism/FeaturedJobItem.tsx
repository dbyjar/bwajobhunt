import { FC } from "react";
import Image from "next/image";

import { Badge } from "../ui/badge";
import { JobType } from "@src/types";

interface FeaturedJobItemProps extends JobType {}

const FeaturedJobItem: FC<FeaturedJobItemProps> = ({
  image,
  jobType,
  name,
  type,
  desc,
  location,
  categories,
}) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <Image src={image} alt={image} width={48} height={48} />
        <span className="px-4 py-1 border text-sm font-semibold text-primary border-primary">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} . {location}
        </div>
        <div className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {desc}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((item, i) => (
          <Badge key={i} variant={"secondary"}>
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobItem;
