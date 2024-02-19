import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Update", "Contact Us"];
const socialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC = () => {
  return (
    <div className="bg-slate-900 px-32  pt-16 pb-11">
      <div className="flex flex-row items-start justify-between">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={160} height={36} />
          </Link>
          <div className="text-muted mt-8">
            Great platform for the job seeker that <br />
            passionate about startups. Find your dream job <br />
            easier.
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>
          <div className="space-y-4">
            {aboutLinks.map((item, i) => (
              <Link key={i} className="block text-muted" href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resources
          </div>
          <div className="space-y-4">
            {resourceLinks.map((item, i) => (
              <Link key={i} className="block text-muted" href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to <br />
            your inbox weekly
          </div>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input className="py-5" placeholder="Email address" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 mb-11 bg-gray-300" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-slate-600">
          {new Date().getFullYear()} ◎ JobHuntly. All rights reserved
        </div>
        <div className="space-x-3">
          {socialMediaImg.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt={item}
              width={32}
              height={32}
              className="inline"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
