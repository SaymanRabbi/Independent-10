import React from 'react';
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <h1 className='display-1' style={{fontWeight:"600"}}>Explore</h1>
                <h1 className='display-1' style={{fontWeight:"600"}}>Amazing Places</h1>
                <button className='button'>Learn More</button>
            </div>
        </div>
    );
};

export default Hero;