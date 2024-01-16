import React from 'react';
import './LatestWork.css'

const LatestWork = ({ data, i }) => {
    //return according to conditional i 
    if (i % 2 == 0) {
        return (
            <div className='p-5  md:ps-10  '>
                <div style={{ backgroundImage: `url(${data.image})` }} className='relative bg-cover bg-center bg-no-repeat z-[5]'>
                    <div className='absolute -left-5 md:-left-16 bottom-20 z-10'>
                        {/* for absolute side tab */}

                        <div className='bg-primaryDark text-center shadow-xl rounded p-4'>
                            <h3 className='text-primaryDonkeyBrown text-lg font-medium'>{data.title}</h3>
                            <h4 className='text-white'>{data.subtitle}</h4>
                        </div>
                    </div>

                    <div className='h-[500px] z-[7] relative w-full cardGradient  text-white'>
                        <h3 className='absolute left-1/2 -translate-x-1/2 bottom-5 '>
                            {data.subtitle} a
                        </h3>
                    </div>




                </div>
            </div>
        );
    }
    return (
        <div className='p-5  md:pe-10 '>
           <div style={{ backgroundImage: `url(${data.image})` }} className='relative bg-cover bg-center bg-no-repeat z-[5]'>
                    <div className='absolute -right-5 md:-right-16 top-20 z-10'>
                        {/* for absolute side tab */}

                        <div className='bg-primaryDark text-center shadow-xl rounded p-4'>
                            <h3 className='text-primaryDonkeyBrown text-lg font-medium'>{data.title}</h3>
                            <h4 className='text-white'>{data.subtitle}</h4>
                        </div>
                    </div>

                    <div className='h-[500px] z-[7] relative w-full cardGradient  text-white'>
                        <h3 className='absolute left-1/2 -translate-x-1/2 bottom-5 '>
                            {data.subtitle} a
                        </h3>
                    </div>




                </div>
        </div>
    );

}

export default LatestWork;
