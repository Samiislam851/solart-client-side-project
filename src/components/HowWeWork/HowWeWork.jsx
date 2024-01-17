import React from 'react';
import ArrowLineRight from '../stylingComponents/ArrowLineLeft/ArrowLineRight';
import SingleLine from '../stylingComponents/SingleLine';
import HowWeWorkChildrenComponent from '../HowWeWorkChildrenComponent/HowWeWorkChildrenComponent';

const HowWeWork = () => {

    const workingProcess = [
        {
            "image": "./assets/images/visit-project.png",
            "title": "Visit Project",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum ipsa sit id excepturi ipsum."
        },
        {
            "image": "./assets/images/planningDesign.png",
            "title": "Planning Design",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum ipsa sit id excepturi ipsum."
        },
        {
            "image": "./assets/images/project-sketch.png",
            "title": "Project Sketch",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum ipsa sit id excepturi ipsum."
        },
        {
            "image": "./assets/images/startworking.png",
            "title": "Start Working",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum ipsa sit id excepturi ipsum."
        },

    ]



    return (
        <div className='bg-secondaryDarkGray text-white py-10'>
            <div className='px-5 md:px-16   max-w-[1600px] mx-auto'>


                <div className='flex justify-center'>
                    <div className='basis-[30%] md:basis-1/2'>
                        <div className='scale-50 md:scale-100'>

                        
                        <ArrowLineRight />
                        </div>
                    </div>

                    <div className='basis-[70%] md:basis-1/2 bottom-10   px-5 md:px-16   max-w-[1600px] mx-auto'>
                        <div className='flex gap-2'>
                            <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                            <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>How We Work</h3>
                        </div>
                        <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold'>Our Easy Working Steps <br />
                            To Start A Project</h2>
                    </div>
                </div>


                <div className='relative pt-16'>
                    <div className='grid grid-cols-2 gap-y-10 md:grid-cols-4 z-[100]'>

                        {workingProcess.map((data, i) => <HowWeWorkChildrenComponent key={i} i={i + 1} data={data}></HowWeWorkChildrenComponent>)}
                    </div>

                    <div className=' absolute top-5 z-[5]'>
                        <SingleLine />
                    </div>


                </div>



            </div>

        </div>
    );
}

export default HowWeWork;
