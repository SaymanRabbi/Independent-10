import React from 'react';
import './SingelPricing.css'

import Benifit from './Benifit';
const SingelPricing = ({ price }) => {
    const { picture, name, balance,benifits } = price
    console.log(price.benifits);
   
    return (
    
        <div className='col-md-6 col-lg-4  p-4 custom-card-img'>
             <span className='qodef-m-label'>New</span>
            <div style={{overflow:"hidden"}}>
            <img src={picture} className='w-100 img-fluid img-hovar' style={{ height: "250px" }} alt="" />
           </div>
            <div className='card-info'>
                <h2 style={{ fontWeight: '300' }}>{name}</h2>
                <span className='custom-line'> </span>
                <h5 className='text-center'>{balance}</h5>
               
            </div>
           
            <div className='p-3 ' style={{border:'1px solid gray'}}>
                {
                    benifits.map(benifit=><Benifit benifit={benifit} key={Math.random()}></Benifit>)
                }
                <button className='check-out'>Check Out &rarr;</button>
            </div>
            </div>
            
            
    );
};

export default SingelPricing;