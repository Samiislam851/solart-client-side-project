import React from 'react';

const WhatWeDid = () => {
    return (
        <div className=''>
            <div className='px-5 md:px-16 py-20 md:py-32  max-w-[1600px] mx-auto'>


                <div className='flex gap-2'>
                    <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                    <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>What We Did</h3>
                </div>
                <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold '>Let's Have a Look What <br />
                    Amazing Work We Have Done!</h2>

            </div>

            <div className='w-full bg-cover bg-center' style={{ backgroundImage: `url('../../../public/assets/images/slider-showcase.jpeg')` }}>

                <div className=' gradient1-bg text-white h-fit  py-32 px-5 md:px-16  max-w-[1600px] mx-auto
             
             '>
                    <div className='flex justify-start  items-center gap-2'>
                        <div>
                            <div className='border-primaryDonkeyBrown appear-animation border-2 w-14 md:w-20 h-0'></div>
                        </div>

                        <div className='text-4xl  md:font-semibold appear-animation '>Discover</div>
                    </div>
                    <div className='py-5'>
                        <div className='md:font-bold text-3xl md:text-5xl flex flex-col gap-2'>
                            <span className='pb-0 md:pb-0 appear-animation1'> ONE STONE HOUSE</span>
                        </div>
                    </div>
                    <p className='md:w-1/2  w-3/4 pt-0 pb-8 appear-animation1-2 flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                     Dhaka, Bangladesh
                     </p>

                    <span className='appear-animation'>
                        <button>


                        </button>
                    </span>


                </div>


            </div>

        </div>
    );
}

export default WhatWeDid;
