import React, { useEffect, useState } from 'react';
import SingelPricing from './SingelPricing';

const Pricing = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('pricing.json').then(res=>res.json()).then(data=>setPrices(data))
    },[])


    return (
        <div >
        <div className='row g-0 mt-5 px-5'>
            {
                prices.map(price=> <SingelPricing price={price} key={price.id}></SingelPricing>)
            }
            </div>
            </div>
    );
};

export default Pricing;