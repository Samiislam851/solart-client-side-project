import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import './ServicesComponents.css'

const ServicesComponent = ({ data, index }) => {

    return (
        <div className=' border border-primaryDonkeyBrown p-6 hover:rounded-lg md:hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out '>
            <div className='flex items-start  justify-between'>
                <div className='w-[20%] md:w-[50%]'><img className='w-full' src={data.image} alt="" /></div>
                <div className='text-4xl md:text-7xl font-bold outlined-text stroked-text '>0{index}</div>
            </div>

            <h2 className='text-3xl font-medium md:text-5xl md:font-bold py-2'>{data.title}</h2>
            <p className=' py-2'>{data.description}</p>
            <button onClick={() => { console.log('Get service clicked'); }}>
            <PrimaryButton  className="scale-110">Get service</PrimaryButton>
            </button>
          
        </div>
    );
}

export default ServicesComponent;
