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

const FormSearch: FC = () => {
  return (
    <>
      <div className="mt-6 bg-white p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <IoSearchSharp className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <IoLocationOutline className="w-6 h-6" />
          <Select>
            <SelectTrigger className="py-8 w-[300px] text-gray-500 border-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </>
  );
};

export default FormSearch;
