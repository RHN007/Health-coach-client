import React from 'react';
import Services from './Services/Services';
import NSlider from './slider/NSlider';
import Statistic from './Statistic/Statistic';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <NSlider></NSlider>
            <WhyUs></WhyUs>
            <Services></Services>
            <Statistic></Statistic>


        </div>
    );
};

export default Home;