import { FC } from "react";
import TitleSection from "../atoms/TitleSection";
import FeaturedJobItem from "./FeaturedJobItem";

const FeaturedJobs: FC = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[1, 2, 3].map((item) => (
          <FeaturedJobItem
            key={item}
            name="Email Marketing"
            type="Agency"
            jobType="Full-Time"
            location="Paris, France"
            image="/images/company.png"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, autem ab qui fugit corporis a?"
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
