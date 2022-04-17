import React from 'react';
import './Hero.css'
import maping from '../../image/mapping.jpg'
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
            
         





            {/* Explre Section-------- */}
            <div className="explore row g-0">
                <h1 className='text-center display-2 mb-5' style={{fontWeight:"500"}}>Explore <span className='explore-more'>More</span> </h1>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className='w-75 mx-auto'>
                        <p>LET THE JOURNEY BEGIN</p>
                    <h2 className='display-2' style={{fontWeight:'600'}}>Explore Now</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.</p>
                    <button className='button'>View Guide &rarr;</button>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                    <img src={maping} className='w-100 img-fluid' alt="" />
                  </div>
                </div>

            </div>


            </div>
    );
};

export default Hero;