import { FC } from "react";
import { JobType } from "@src/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface LatestJobItemProps extends JobType {}

const LatestJobItem: FC<LatestJobItemProps> = ({
  image,
  jobType,
  name,
  type,
  location,
  categories,
}) => {
  return (
    <div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
      <div>
        <Image src={image} alt={image} width={48} height={48} />
      </div>
      <div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm text-muted-foreground mb-2">
          {type} . {location}
        </div>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant="secondary">{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories.map((item, i) => (
            <Badge
              key={i}
              variant={"outline"}
              className="rounded border border-primary bg-primary/5 text-primary"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobItem;
