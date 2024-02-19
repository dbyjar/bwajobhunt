import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="/images/logo2.png"
              width="160"
              height="36"
            />
          </Link>
        </div>
        <div>
          <Link href="/find-jobs">
            <span className="font-medium text-gray-400 mr-4 cursor-pointer">
              Find Jobs
            </span>
          </Link>
          <Link href="/find-companies">
            <span className="font-medium text-gray-400 cursor-pointer">
              Browse Companies
            </span>
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        <Button variant={"link"}>Login</Button>
        <Button>SignUp</Button>
      </div>
    </header>
  );
};

export default Navbar;
