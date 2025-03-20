import React from 'react'
import LatestJobsCard from './LatestJobsCard';

const LatestJobs = () => {
  const randomJobs = [1,2,3,4,5,6,7,6];
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className='text-[#6A38c2]'>Latest & Top</span>Jobs Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
      {
          randomJobs.slice(0,6).map((item,index)=> <LatestJobsCard key={index}/>)
      }

      </div>
    </div>
  )
}

export default LatestJobs