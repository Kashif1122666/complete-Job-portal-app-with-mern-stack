import React, { useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();
    const registerNewCompany = async ()=>{
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials:true
            })
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message)
                const companyId = res?.data?.data?._id;
                navigate(`/admin/companies/${companyId}`);
                
            
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p className='text-gray-500'>What would you prefer for your Company name? you can change it later.</p>
            </div>
             <Label>Company Name</Label>
             <Input
             type='text'
             className='my-2'
             placeholder='JobHunt , Microsoft etc'
             onChange={(e)=> setCompanyName(e.target.value)}
             /> 
             <div className='flex items-center gap-2 my-10'>
                  <Button className={'border border-gray-300'} onClick={()=>navigate('/admin/companies')}>Cancel</Button>
                  <Button className={'bg-black text-white'} onClick={registerNewCompany}>Continue</Button>
             </div>
        </div>
    </div>
  )
}

export default CompanyCreate