import React from 'react';

import img1 from '../../../assets/sliderImg/img1.jpg'
import img2 from '../../../assets/sliderImg/img2.jpg'
import img3 from '../../../assets/sliderImg/img3.jpg'
import ItemSlider from './ItemSlider';

const NSlider = () => {
    const sliderData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
       
    ]
    return (
        <div className='carousel w-full '>
             {
               sliderData.map(slide =><ItemSlider key={slide.id} slide={slide}></ItemSlider>) 
            }
        </div>
    );
};

export default NSlider;