import React from 'react';
import {CheckIcon} from '@heroicons/react/solid'
const Benifit = ({benifit}) => {
    return (
        <div className='mt-3 d-flex align-items-center ' >
            <CheckIcon style={{ width: '20px', height: '20px' }}></CheckIcon>
            <p className='mt-0 mb-0 ms-2' style={{borderBottom:'1px solid #000000a6'}}>{benifit}</p>
        </div>
    );
};

export default Benifit;