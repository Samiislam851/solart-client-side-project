import React from 'react';
import ArrowLineLeft from '../stylingComponents/ArrowLineLeft/ArrowLineLeft';
import ArrowLineRight from '../stylingComponents/ArrowLineLeft/ArrowLineRight';
import ServicesComponent from '../ServicesComponent/ServicesComponent';

const OurServices = () => {
    const demoServices = [
        {
            "image": "./assets/images/house.png",
            "title": "Architechture",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            "image": "./assets/images/interior.png",
            "title": "Interior Design",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?"
        },
        {
            "image": "./assets/images/homedecor.png",
            "title": "Home Decor",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?"
        }
    ]





    return (
        <div className='   px-5 md:px-16   max-w-[1600px] mx-auto'>
            <div className='relative my-24  z-[100]'>

                <div className='absolute scale-[.4] md:scale-100 right-[-80%] top-[-10%]  md:right-[-10%] z-[-100]'>

                    <div className=' md:w-full'>
                        <ArrowLineLeft />
                    </div>



                </div>



                <div className='z-[100] '>


                    <div className='flex gap-2'>
                        <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                        <h3 className='text-xl md:text-3xl font-semibold z-10'>Our Services</h3>
                    </div>

                    <h1 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold'>We Provide Best <br />
                        Interior Design Services </h1>

                        <div className='grid grid-cols-1  pt-10 md:grid-cols-3 gap-5'>

                        {demoServices.map((data, index) => <ServicesComponent key={index} data={data} index={index + 1}></ServicesComponent>)}
                        </div>
                   


                </div>






            </div>
        </div>

    );
}

export default OurServices;
