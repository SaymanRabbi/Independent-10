import React from 'react';
import maxico from '../../image/mxct-650x650.jpg'
import turky from '../../image/mosq-650x650.jpg'
import japan from '../../image/smbg-650x650.jpg'
import ireland from '../../image/vdbrg-650x650.jpg'
const VisitorPlaces = () => {

    return (
        <div className='mt-5'>
            <div className="row g-0 ">
                <h2 className='text-center display-3 mb-5' style={{fontWeight:'500'}}> <span className='explore-more'>HisTo<span className='text-danger'>RiCal</span> </span> Place</h2>
                <div className="col-lg-3 col-md-6 col-6 custom-position">
                    <img src={maxico} className='w-100' alt="" />
                    <div className='custom-absoulte'>
                        <h2>Maxico</h2>
                        <p>View Guide &rarr;</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 custom-position">
                    <img src={turky} className='w-100' alt="" />
                    <div className='custom-absoulte'>
                        <h2>Turky</h2>
                        <p>View Guide &rarr;</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 custom-position">
                    <img src={ireland} className='w-100' alt="" />
                    <div className='custom-absoulte'>
                        <h2>Ireland</h2>
                        <p>View Guide &rarr;</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 custom-position">
                    <img src={japan} className='w-100' alt="" />
                    <div className='custom-absoulte'>
                        <h2>Japan</h2>
                        <p>View Guide &rarr;</p>
                    </div>
                </div>
</div>
        </div>
    );
};

export default VisitorPlaces;