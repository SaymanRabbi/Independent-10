import React from 'react';
import img from '../../image/sayman.jpg'
const About = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
             
            <div className="w-50 mx-auto mt-5">
            <img src={img} className='w-50 img-fluid d-block mx-auto' alt="" />
                <p className='fs-3 fw-bold mt-3'>
                    My Goal!!! Want to be a web developer and my dream one day i will work with @jhankar mahbub sir and programing hero team. i know that what i doing everyday and i belive my dreams will be came true.Happy Coding😍😍😍😍
             </p>
            </div>
        </div>
    );
};

export default About;