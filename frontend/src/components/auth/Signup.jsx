import React from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center  max-w-7xl  mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label> Full Name</Label>
            <Input type="text" placeholder="kaif" />
          </div>
          <div className="my-2">
            <Label> Gmail</Label>
            <Input type="email" placeholder="kaif@gmail.com" />
          </div>
          <div className="my-2">
            <Label> Phone Number</Label>
            <Input type="Number" placeholder="091223344" />
          </div>
          <div className="my-2">
            <Label> Password</Label>
            <Input type="password" placeholder="kaif@gmail.com" />
          </div>
          <div className=" flex items-center justify-center">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
