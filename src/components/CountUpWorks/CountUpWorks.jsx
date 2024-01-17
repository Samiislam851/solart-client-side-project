import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import './CountUp.css'

const CountUpWorks = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    function getScrollbarPercentage() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentPosition = window.scrollY;
        const scrollbarPercentage = (currentPosition / totalHeight) * 100;
        setScrollPercent(scrollbarPercentage)
        return scrollbarPercentage
    }
    // console.log('yo---', scrollPercent);

    /// 85 is the mark




    useEffect(() => {
        window.addEventListener('scroll', getScrollbarPercentage)
        return () => {
            window.removeEventListener('scroll', getScrollbarPercentage)
        };
    }, []);



    const image = <img src='./assets/images/home-decor2.png' />
    const image2 = <img src='./assets/images/house2.png' />





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
        <div className='bg-primaryDonkeyBrown flex flex-col md:flex-row items-center  md:justify-around relative py-20 zi-1'>


            <div className=' zi-2 w-[150px] opacity-40 md:translate-y-[-60px]  top-0 left-60'>
                {image2}
            </div>
            <div className=' zi-2 w-[150px] opacity-40 md:translate-y-[60px]'>
                {image}

            </div>




            <div className='top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] absolute grid grid-cols-2 zi-3 md:grid-cols-4 gap-4 w-fit mx-auto     max-w-[1600px] '>
                {data.map((data, i) =>
                    <div className='flex text-center flex-col gap-3 ' key={i}>
                        <h2 className='my-color font-bold text-6xl md:text-7xl'>

                            {scrollPercent < 85 ? <CountUp
                                start={null}
                                end={null}
                                duration={5}
                                decimal=","
                            >
                            </CountUp>
                                :
                                <CountUp
                                    start={null}
                                    end={data.number}
                                    duration={5}
                                    className='  stroked-text2 '

                                    decimal=","
                                >

                                </CountUp>
                            }

                        </h2>
                        <p className='text-white text-lg'>{data.label}</p>
                    </div>
                )}
            </div>
            <div className='absolute w-[100vw] top-0 z-[50]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="276" viewBox="0 0 1321 276" fill="none">
                    <path opacity="0.3" d="M1.51713 110.511C64.6584 153.3 222.67 235.188 349.586 220.427C508.23 201.976 656.498 33.1694 768.776 66.7676C881.054 100.366 910.874 299.884 1045.02 270.921C1179.16 241.959 1202.4 40.9742 1319.7 2.19375" stroke="white" strokeWidth="4" stroke-dasharray="8 8" />
                </svg>
            </div>
        </div>
    );
};

export default CountUpWorks;