import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { Avatar, AvatarImage } from "../avatar";
import { LogOut, User2 } from "lucide-react";
import { data, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
    const {user} = useSelector((store)=> store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async ()=>{
      try {
        const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
        if(res.data.message){
          dispatch(setUser(null));
          navigate('/')
          toast.success(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }

    }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/browse'>Browse</Link></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button variant="">Login</Button></Link>
                    <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                </div>
            ):(



                <Popover >
                <PopoverTrigger asChild >
                  <Avatar className={'cursor-pointer'}>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className={'w-80  bg-white shadow-md border border-gray-200 rounded-lg p-4'}>
                <div className="flex gap-4 space-y-2">
      
                <Avatar className={'cursor-pointer'}>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar> 
                     <div className="mb-3">
                     <h4 className="font-medium">Kaif</h4>
                     <p class="text-gray-500">This is muted text.</p>
                     </div>
                </div>
                <div className="flex flex-col  text-gray-600">
                <div className="flex gap-3  items-center">
                    <User2/>
                <Button variant="link" ><Link to={'/profile'}>View Profile</Link></Button>
                </div>
                <div className="flex gap-3 items-center">
                <LogOut/>
                <Button variant="link" onClick={logoutHandler}> logout</Button>
                </div>
                </div>
                </PopoverContent>
              </Popover>

            )
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
