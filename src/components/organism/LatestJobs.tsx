import { FC } from "react";
import TitleSection from "../atoms/TitleSection";
import LatestJobItem from "./LatestJobItem";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid gap-8 grid-cols-3">
        {[0, 1, 2].map((item, index) => (
          <LatestJobItem
            key={index}
            name="Email Marketing"
            type="Agency"
            jobType="Full-Time"
            location="Paris, France"
            image="/images/company.png"
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
