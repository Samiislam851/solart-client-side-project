import React from 'react';

const CountUpWorks = () => {
    const data = [
        {
            "number": 123,
            "label": "Projects Completed"
        },
        {
            "number": 95,
            "label": "Clients Satisfied"
        },
        {
            "number": 25,
            "label": "professional engineers"
        },
        {
            "number": 18,
            "label": "Years of Experience"
        }
    ]
    return (
        <div className='bg-primaryDonkeyBrown py-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto  px-5 md:px-16   max-w-[1600px] '>
                {data.map((data, i) =>
                    <div className='flex text-center flex-col gap-2' key={i}>
                       <h2 className='my-color font-bold text-4xl md:text-6xl'>{data.number}</h2>
                       <p className='text-white text-lg'>{data.label}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountUpWorks;