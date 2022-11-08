import React from 'react';
import './slider.css'

const ItemSlider = ({slide}) => {
    const {image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} className="w-full rounded-xl" alt=''/>
        </div>
        <div className="absolute justify-end transform -translate-y-1/2 left-24  top-1/4">
            <h3 className='hidden md:block text-sm md:text-2xl font-bold text-primary italic'>
                    Inspiring your to live a healthier lifestyle.
            </h3>
            <h1 className='text-sm md:text-6xl font-bold text-white'>
                 I am Mariyam ! <br /> Your Health Advisor
            </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
          <p className=' hidden md:block text-xl text-white'>
          Health Coach Provides world-class health , Yoga, fitness & nutrition certification Programs to world-class professional
          </p>
        </div>
        <div className="absolute hidden md:block  flex justify-start transform -translate-y-1/2 left-32 w-2/5 top-3/4">
        <button className="btn btn-primary  mr-5">Know More</button>
        <button className="btn btn-outline btn-primary">Contact us</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5 ">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle btn-primary ">❯</a>
        </div>
    </div>
)};

export default ItemSlider;