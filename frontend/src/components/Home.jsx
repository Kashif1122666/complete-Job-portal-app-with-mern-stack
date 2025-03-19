import React from 'react'
import Navbar from './ui/shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './categoryCarousel.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        {/* <LatestJobs/>
        <Footer/> */}
    </div>
  )
}

export default Home