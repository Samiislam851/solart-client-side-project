import React from 'react';
import './HowWeWorkChildrenComponent.css'

const HowWeWorkChildrenComponent = ({ data, i }) => {

    return (
        <div className='p-5 relative'>
            <div className='flex flex-col gap-2 items-center justify-center text-center z-[100]'>
                <div className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] p-2 bg-white rounded-full'>
                    <img src={data.image} alt="" />
                </div>
                <div>
                    <h3 className='text-xl py-2'>{data.title}</h3>
                </div>

                <p className='text-base' > {data.description}</p>
            </div>
            <div className='absolute top-[-20px]'>
                <h3 className='stroked-text1 text-4xl md:text-6xl'> 0{i}</h3>
            </div>
        </div>
    );
}

export default HowWeWorkChildrenComponent;
