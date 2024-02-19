import ExploreDataContainer from "@src/components/containers/ExploreDataContainer";
import { FC } from "react";

const FindJobs: FC = () => {
  const onSubmitFilter = async () => {
    return;
  };

  return (
    <div>
      <ExploreDataContainer
        formFilter=""
        filterForm=""
        onSubmitFilter={onSubmitFilter}
      />
    </div>
  );
};

export default FindJobs;
