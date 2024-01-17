import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {

    function scrollToTop() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

    const iconStyle = {
        color: '#ffffff',
    };

    const points = [
        { "title": "Architectural Design", "description": "Innovative Concepts" },
        { "title": "Interior Design", "description": "Aesthetic Spaces" },
        { "title": "Project Management", "description": "Seamless Execution" },
        { "title": "Sustainable Architecture", "description": "Eco-Friendly Designs" },
        { "title": "Consultation Services", "description": "Expert Guidance" }
    ]
    return (
        <div className='  bg-secondaryDarkGray pb-5 pt-10 md:pt-20 text-white'>
            <div className='grid md:grid-cols-4 grid-cols-1  mx-auto  px-5 md:px-16 gap-10   max-w-[1600px]'>
                {/* First section */}

                <div className=" mx-auto flex flex-col items-start justify-start">
                    <h2 className="text-3xl text-white font-bold mb-4">Newsletter</h2>
                    <p className="text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, mauris quis feugiat tincidunt, metus quam fringilla felis.</p>

                    <div className="flex items-center justify-center w-full ">
                        <input
                            type="email"
                            placeholder="Your email"
                            className=" rounded rounded-e-none text-gray-900 px-3 py-2 focus:outline-none w-full"
                        />
                        <button
                            type="button"
                            className="bg-primaryDonkeyBrown border-primaryDonkeyBrown text-white px-6 py-2 rounded rounded-s-none  "
                        >
                            Subscribe
                        </button>
                    </div>
                </div>


                <div>
                    <div>
                        <h3 className='text-2xl'>Our Services</h3>

                        <ul className='my-2'>
                            {points.map((point, i) => <li className='flex gap-2 my-3' key={i}>
                                <img src="./assets/images/icons/circlePoint.svg" className='w-[20px]' alt="" /> <p> {point.title} </p>
                            </li>)}
                        </ul>

                    </div>


                </div>
                <div>
                    <div>
                        <h3 className='text-2xl'>Our Projects</h3>

                        <ul className='my-2'>

                            <li className='my-3'>
                                <h3 className='text-base pb-1'>Architecture</h3>
                                <div className='flex gap-2'>
                                    <img src="./assets/images/slider-showcase.jpeg" className='w-[60px] h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodiness-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodines-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />

                                </div>
                            </li>
                            <li className='my-3'>
                                <h3 className='text-base pb-1'>Interior</h3>
                                <div className='flex gap-2'>
                                    <img src="./assets/images/slider-showcase.jpeg" className='w-[60px] h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodiness-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodines-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />

                                </div>
                            </li>
                            <li className='my-3'>
                                <h3 className='text-base pb-1'>Decoration</h3>
                                <div className='flex gap-2'>
                                    <img src="./assets/images/slider-showcase.jpeg" className='w-[60px] h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodiness-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                                    <img src="./assets/images/woodines-house.jpeg" className='w-[60px]  h-[40px]  hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />

                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
                <div>

                    <div>
                        <h3 className='flex justify-start pb-5'>
                            <div className='flex gap-2 w-fit justify-center  items-center'>
                                <div className='h-auto basis-1/2 '>
                                    <img className='h-[40px]  w-[40px] float-end' src="./assets/images/logo.svg" alt="" />
                                </div>
                                <a className="basis-1/2 font-semibold text-5xl">SolArt</a>
                            </div>
                        </h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in suscipit quae ad ipsum officia?</p>
                        <ul className='my-2'>
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <div className="bg-primaryDonkeyBrown p-4 shadow-md">
                                    <a href="#" style={iconStyle}>
                                        <FiFacebook size={24} />
                                    </a>
                                </div>

                                {/* Twitter */}
                                <div className="bg-primaryDonkeyBrown p-4 shadow-md">
                                    <a href="#" style={iconStyle}>
                                        <FiTwitter size={24} />
                                    </a>
                                </div>

                                {/* Instagram */}
                                <div className="bg-primaryDonkeyBrown p-4 shadow-md">
                                    <a href="#" style={iconStyle}>
                                        <FiInstagram size={24} />
                                    </a>
                                </div>

                                {/* LinkedIn */}
                                <div className="bg-primaryDonkeyBrown p-4 shadow-md">
                                    <a href="#" style={iconStyle}>
                                        <FiLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>


            </div>

            <div className='w-full relative border-t mt-10 border-t-gray-700'>
                <div onClick={scrollToTop} className='cursor-pointer animate-bounce absolute  top-[-13px] p-2 bg-primaryDonkeyBrown rounded-full left-1/2 -translate-x-[70%] translate-y-[-50%]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 15L12 9L6 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                
                </div>
            </div>
            <p className="text-center py-10 text-white">
                Copyright by SoluArt © 2022. All rights reserved
            </p>
        </div>
    );
}

export default Footer;
