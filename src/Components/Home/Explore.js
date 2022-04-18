import React from 'react';
import maping from '../../image/mapping.jpg'
const Explore = () => {
    return (
        <div>
            <div className="explore row g-0 mt-5">
                <h1 className='text-center display-2 mb-5' style={{fontWeight:"500"}}>Explore <span className='explore-more'>More</span> </h1>
                <div className="col-lg-6 order-lg-0 order-md-0 order-1 col-md-6 mb-5 d-flex align-items-center justify-content-center">
                    <div className='w-75 mx-auto'>
                        <p>LET THE JOURNEY BEGIN</p>
                    <h2 className='display-2' style={{fontWeight:'600'}}>Explore Now</h2>
                    <p>The Most Beautiful Places to Visit in Indonesia September 13, 2021 Socio Lib Tips Lorem ipsum dolor sit amet, consectetu</p>
                    <p>Dont Miss these Street Foods in Bangkok September 13, 2021 Socio Lib Tips Lorem ipsum dolor sit amet, consectetur</p>
                    <button className='button'>View Guide &rarr;</button>
                    </div>
                </div>
                <div className="col-lg-6  col-md-6 mb-5">
                    <div>
                    <img src={maping} className='w-100 img-fluid' alt="" />
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Explore;