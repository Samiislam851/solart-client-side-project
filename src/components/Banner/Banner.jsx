import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

const Banner = () => {
    return (
        <>
            <div className=' text-white h-fit
            
            py-20 px-5 md:px-16  max-w-[1600px] mx-auto
             
             '>
                <div className='flex justify-start  items-center gap-2'>
                    <div>
                        <div className='border-primaryDonkeyBrown appear-animation border-2 w-14 md:w-20 h-0'></div>
                    </div>

                    <div className='text-4xl  md:font-semibold appear-animation '>#1</div>
                </div>
                <div className='py-5'>
                    <div className='md:font-bold text-3xl md:text-5xl flex flex-col gap-2'>
                        <span className='pb-3 md:pb-5 appear-animation1'> WORLD CLASS DESIGN </span>
                        <span className='appear-animation1'>FOR YOUR INTERIOR SET-UP</span>  </div>
                </div>
                <p className='md:w-1/2  w-3/4 pt-3 pb-8 appear-animation1-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi fuga alias quibusdam atque unde earum odio odit numquam laudantium delectus.</p>

                <span className='appear-animation'>
                    <button>
                    <PrimaryButton  >  <span className='uppercase'>Our portfolio</span> </PrimaryButton>

                    </button>
                </span>


            </div>
        </>
    );
}

export default Banner;
