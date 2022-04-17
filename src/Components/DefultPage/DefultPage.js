import React from 'react';
import NotFound from '../../image/404.webp'

const DefultPage = () => {
    return (
        <div className='container d-flex mt-5 align-items-center gap-5 justify-content-center' style={{height:"70vh"}}>
            <div className='text-center'>
            <h1 style={{fontSize:"100px",fontWeight:"bold"}}>404</h1>
            <h1 style={{fontSize:"60px",fontWeight:"bold"}}>Page Not Found</h1>
            </div>
            <div>
                <img src={NotFound} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default DefultPage;