import React from 'react'
import Navbar from './ui/shared/Navbar';
import FilterCards from './FilterCards';
import Job from './job';
const Jobs = () => {
    const jobArray = [1,2,3,4,5,6,7,8];
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
            <div className='w-20%'>
        <FilterCards/>
            </div>
        {
            jobArray.length <= 0 ? (<span>No job yet</span>) :(
            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid  grid-cols-3 gap-4'>
                {jobArray.map((item,index)=> (
                    <div key={index}>
                        <Job />
                    </div>
                ))}
                </div>
            </div>
            )
        }
        </div>
        </div>
    </div>
  )
}

export default Jobs;