import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const CategoryCarousel = () => {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "Data Scientist",
        "Graphic Designer",
        "Fullstack Developer",
    ]
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                    category.map((item, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 " key={index}><Button  className=" rounded-full">{item}</Button></CarouselItem>
                    ))
                }
            </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CategoryCarousel