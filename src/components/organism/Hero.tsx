import { FC } from "react";
import Image from "next/image";
import FormSearch from "./FormSearch";

const Hero: FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-1/2">
        <div className="text-7xl font-semibold text-slate-600 w-max relative">
          Discover <br />
          more than <br /> <span className="text-primary">5000 +</span>
        </div>
        <Image
          className="mb-5"
          src="/images/pattern2.png"
          alt="/images/pattern2.png"
          width={455}
          height={32}
        />
        <div className="text-muted-foreground text-lg">
          Great platform for the job seeker that searching for <br />
          new career heights and passionate about startup
        </div>
        <FormSearch />
      </div>
      <div className="block mt-2">
        <Image
          src="/images/hero.png"
          alt="/images/hero.png"
          objectFit="contain"
          width={501}
          height={710}
        />
      </div>
    </div>
  );
};

export default Hero;
