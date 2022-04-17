import React from 'react';
import maping from '../../image/mapping.jpg'
const Explore = () => {
    return (
        <div>
            <div className="explore row g-0 mt-5">
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

export default Explore;