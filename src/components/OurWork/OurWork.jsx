import React from 'react';
import ArrowLineRight from '../stylingComponents/ArrowLineLeft/ArrowLineRight';
import ArrowLineLeft from '../stylingComponents/ArrowLineLeft/ArrowLineLeft';
import LatestWork from '../LatestWork/LatestWork';
import PrimaryButton from '../buttons/PrimaryButton';

const OurWork = () => {

    // this is created dynamically  you can add as much works as you want

    const works = [
        {
            "image": "./assets/images/bunglaw-dark-house.jpeg",
            "title": "Architecture",
            "subtitle": "Bungalow Dark house"
        },
        {
            "image": "./assets/images/woodines-house.jpeg",
            "title": "Interior Design",
            "subtitle": "Subtitle for the example content"
        },
        {
            "image": "./assets/images/woodiness-house.jpeg",
            "title": "Home Decor",
            "subtitle": "Bungalow Dark house"
        },
        {
            "image": "./assets/images/bunglawjpeg.jpeg",
            "title": "Urban Design",
            "subtitle": "Subtitle for the example content"
        }
    ]

    return (
        <div className=' '>

            {/*-------------- Top portion------------------- */}
            <div className='relative pt-5 pb-10 w-full'>
                <div className='flex'>
                    <div className=' w-full '>
                        <div className='scale-50 translate-x-[-30%] md:translate-x-0 md:scale-100  '>
                            <ArrowLineRight />
                        </div>

                    </div>
                    <div className=' w-full flex justify-end pt-10 md:pt-36 '>
                        <div className='scale-75 
                    md:scale-100
                        md:translate-x-0  '>
                            <ArrowLineLeft />
                        </div>


                    </div>



                </div>
                <div className='absolute bottom-10   px-5 md:px-16   max-w-[1600px] mx-auto'>
                    <div className='flex gap-2'>
                        <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                        <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>Our Projects</h3>

                    </div>
                    <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold'>Our Outstanding Latest <br />
                        Proejcts & Work</h2>

                </div>


            </div>


            {/* bottom show case */}



            <div className='px-5 md:px-16   max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 -gap-10 mt-5'>
                {works.map((work, i) => <LatestWork key={i} data={work} i={i + 1}></LatestWork>)}

            </div>

            <div className='flex justify-center pt-10 pb-10 md:pb-20'>
                <button onClick={() => console.log('load more button clicked')} className='mx-auto w-fit border'><PrimaryButton>Load More</PrimaryButton></button>

            </div>

        </div>
    );
}

export default OurWork;
