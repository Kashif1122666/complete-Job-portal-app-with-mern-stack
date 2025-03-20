import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { data } from 'react-router-dom'
import { Label } from '@radix-ui/react-label'

const FilterCards = () => {
    const filterData = [
        {
             filterType:"Location",
             array:["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
        },
        {
             filterType:"Industry",
             array:["Frontend Developer","Backend Developer","FullStack Developer"]
        },
        {
             filterType:"Salary",
             array:["0-40K","42-1Lakh","Islamabad","1Lakh-5Lakh"]
        },
    ]
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter jobs</h1>
        <hr  className='mt-3'/>
        <RadioGroup>
         {
            filterData.map((item,index)=>(
                 <div key={index}>
                    <h1 className='font-bold text-lg'>{item.filterType}</h1>
                {
                       item.array.map((item,index)=>{
                        return (
                            <div key={index} className='flex items-center space-x-2 my-2'>
                            <RadioGroupItem value={item}   />
                            <Label>{item}</Label>
                            </div>
                        )

                       })
                }
                 </div>
            ))
         }
        </RadioGroup>
    </div>
  )
}

export default FilterCards