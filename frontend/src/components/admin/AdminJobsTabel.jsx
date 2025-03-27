import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useNavigate } from "react-router-dom";

const AdminJobsTabel = () => {
  const {companies,searchCompanyByText} = useSelector(store=> store.company);
  const {allAdminJobs} = useSelector(store => store.job);
  const [filterJobs,SetFilterJobs]= useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const filteredCompany = allAdminJobs.filter((job) => {
      if (!searchCompanyByText) return true;
      return job?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    SetFilterJobs(filteredCompany);
  }, [allAdminJobs, searchCompanyByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={'text-right'}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
        {

                 
filterJobs?.map((job)=>(
                   
                         <tr>
                         
                         
                      
          <TableCell>{job?.company?.name}</TableCell>
          <TableCell>{job?.title}</TableCell>
          <TableCell>{job?.company?.createdAt.split("T")[0]}</TableCell>
          <TableCell className='text-right cursor-pointer'>
            <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className="w-32  pl-7">
                    <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer ">
                        <Edit2 className="w-4"/>
                        <span>Edit</span>
                    </div>
                </PopoverContent>
            </Popover>
          </TableCell>

                         </tr>
                    
                  )
                )
              }
          
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTabel;
