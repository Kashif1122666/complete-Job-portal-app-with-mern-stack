import React from 'react'
import Navbar from './ui/shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './categoryCarousel.jsx'
import LatestJobs from './LatestJobs.jsx'
import Footer from './Footer.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home