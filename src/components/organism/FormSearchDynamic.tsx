import { LOCATION_JOBS } from "@src/constants";
import { FC } from "react";
import { IoSearchSharp, IoLocationOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSearchDynamic: FC = () => {
  return (
    <div className="mx-auto w-max">
      <div className=" bg-white p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10 text-center">
        <div className="inline-flex gap-3 items-center">
          <IoSearchSharp className="w-6 h-6" />
          <Input
            className="py-5 w-[350px] border-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <IoLocationOutline className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-5 w-[350px] text-gray-500 border-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_JOBS.map((item, i) => (
                <SelectItem key={i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android
      </div>
    </div>
  );
};

export default FormSearchDynamic;
