import React from 'react';
import Explore from './Explore';
import './Hero.css'
import Pricing from './Pricing';
import Slider from './Slider';
import VisitorPlaces from './VisitorPlaces';
const Hero = () => {
    return (
        <div>
            <div className="" style={{height:'600px'}}>
        <div className='hero'>
            <div className='container'>
                <h1 className='display-1' style={{fontWeight:"600"}}>Explore</h1>
                <h1 className='display-1' style={{fontWeight:"600"}}>Amazing Places</h1>
                <button className='button'>Learn More &rarr;</button>
            </div>
                </div>
            </div>
            <Slider></Slider>
            <Explore></Explore>
            <VisitorPlaces></VisitorPlaces>
            <Pricing></Pricing>
            </div>
    );
};

export default Hero;