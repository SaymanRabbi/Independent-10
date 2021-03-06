import React, { useContext } from 'react';
import './SingelPricing.css'

import Benifit from './Benifit';
import { Link } from 'react-router-dom';
import { Contextapi } from '../../App';

const SingelPricing = ({ price }) => {
    const value = useContext(Contextapi)
    const [, setData] = value;
    const getValue = (data) => {
        setData(data)
    }
    const { picture, name, balance,benifits } = price
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
               <Link to={'/checkout'}> <button className='check-out' onClick={()=>getValue(price)}>Check Out &rarr;</button> </Link>
            </div>
            </div>
            
            
    );
};

export default SingelPricing;