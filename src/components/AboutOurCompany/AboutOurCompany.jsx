import React from 'react';

const AboutOurCompany = () => {

    const points = [
        "Business applications through the Project",
        "Procedures whereas processes Is finally Set-up",
        "Revolutionary catalysts for changes when needed",
        "Business applications through the Project"
    ]



    return (

        <div className=' text-white bg-secondaryDarkGray'>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center py-20 px-5 md:px-16 w-full  max-w-[1600px] mx-auto'>


                <div className='basis-1/2'>
                    <iframe className='w-full md:w-[564]' height="315" src="https://www.youtube.com/embed/NoWyNgAQe34?si=52Ugsn6Lv5BilZAX" title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="basis-1/2">
                    <div className='flex gap-2'>
                        <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                        <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>About Our Company</h3>

                    </div>
                    <h2 className='text-2xl md:text-4xl md:py-5 font-medium md:font-bold'>Providing the best architecture <br />
                        & interior design services</h2>

                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in suscipit quae ad ipsum officia?</p>
                    <ul className='my-6'>
                        {points.map((point, i) => <li className='flex gap-2 my-3' key={i}>
                          <img src="../../../public/assets/images/icons/circlePoint.svg" className='w-[20px]' alt="" />  {point}
                        </li>)}
                    </ul>


                </div>
            </div>
        </div >
    );
}

export default AboutOurCompany;
