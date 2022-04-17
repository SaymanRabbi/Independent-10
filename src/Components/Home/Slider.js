import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import img1 from '../../image/baggy-650x650.jpg'
import img2 from '../../image/camel-650x650.jpg'
import img3 from '../../image/wavvy-650x650.jpg'
import './Slider.css'
const breckpoints = [
    {width:1,itemsToShow:1},
    {width:500,itemsToShow:1},
    {width:768,itemsToShow:2},
    {width:1200,itemsToShow:2},
]
const Slider = () => {
    return (
        <>
            <Carousel breakPoints={breckpoints} enableAutoPlay autoPlaySpeed={1500}>
                <Item>
                    <div className="row">
                        <div className="col-6 m-auto">
                           <img src={img1} className='w-100' alt="" />
                        </div>
                        <div className="col-6 m-auto">
                           <h3>
                                7 Pro Tips for Packing for Your First Backpacking Trip	</h3>
                            <p className='button-custom'><span className='span'>Read More</span> &rarr;</p>
                        </div>
                    </div>

             </Item>
                <Item>
                <div className="row">
                        <div className="col-6 m-auto">
                           <img src={img2} className='w-100' alt="" />
                        </div>
                        <div className="col-6 m-auto">
                           <h3>
                           Exotic Animals of the World that You Can Ride Safely	</h3>
                            <p className='button-custom'><span className='span'>Read More</span> &rarr;</p>
                        </div>
                    </div> 

                    
			
             </Item>
                <Item>
                <div className="row">
                        <div className="col-6 m-auto">
                           <img src={img3} className='w-100' alt="" />
                        </div>
                        <div className="col-6 m-auto">
                           <h3>
                           
		Best Surf Spots In Indonesia You Should Visit	</h3>
                            <p className='button-custom'><span className='span'>Read More</span> &rarr;</p>
                        </div>
                    </div> 

             </Item>
            
            </Carousel>
        </>
    );
};

export default Slider;