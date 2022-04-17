import React from 'react';
import './DreamDiscover.css'
import arrow from '../../image/arrw.png'
const DreamDiscover = () => {
    return (
        <div>
            <div className="DreamDiscover">
                <div className='text-container row g-0'>
                    <div className="dream-text col-6 col-md-6 mx-auto">
                        <h1>
                         Explore. Dream. Discover.
                        </h1>
                    </div>
                    <div className="dream-img col-6 col-md-6 mx-auto">
                        
                        <img src={arrow} alt="" className='d-none d-lg-block' />
                        <button className='button'> Lets Go!</button>
                      
                    </div>
               </div>
            </div>
        </div>
    );
};

export default DreamDiscover;