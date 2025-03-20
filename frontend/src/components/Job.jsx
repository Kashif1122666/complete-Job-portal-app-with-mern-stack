import { Bookmark } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-300">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button className="rounded-full " size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Pakistan</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi
          recusandae vel corrupti inventore sunt assumenda sed incidunt
          consectetur dolorum.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold outline-none"}>
          12 positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold outline-none"}>
          Part Time{" "}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold outline-none"}>24LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button>Details</Button>
        <Button className='bg-[#7209b7] cursor-pointer'>Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
