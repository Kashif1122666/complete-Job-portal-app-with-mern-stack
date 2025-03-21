import React from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Heading1, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";

const Profile = () => {
  const skills = ["HTML", "CSS", "JS", "React.js"];
  const resume = true;
  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border  border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className={"h-24 w-24"}>
              <AvatarImage
                src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png"
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente nihil cumque necessitatibus hic ex?
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>farooq@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>0912345678</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge key={index} className={"bg-black text-white"}>
                  {item}
                </Badge>
              ))
            ) : (
              <h1>NA</h1>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {resume ? <a target="blank" href="#" className="text-blue-500 w-full hover:underline cursor-pointer">Farooq's resume</a> : <p>NA</p>}
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable/>
        </div>
    </div>
  );
};

export default Profile;
