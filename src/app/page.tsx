import BannerSignUp from "@src/components/organism/BannerSignUp";
import Category from "@src/components/organism/Category";
import Client from "@src/components/organism/Client";
import FeaturedJobs from "@src/components/organism/FeaturedJobs";
import Hero from "@src/components/organism/Hero";
import LatestJobs from "@src/components/organism/LatestJobs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
      </div>
      <Hero />
      <Client />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
