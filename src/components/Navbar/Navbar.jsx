import React, { useEffect, useState } from 'react';
import './Navbar.css'
import Banner from '../Banner/Banner';
import CallAnytime from '../CallAnytime/CallAnytime';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const classlist = document.getElementById('hiddenNav').classList

        if (open) {
            // const newClassList = classes.filter(className => className !== 'top-[-500%]')
            classlist.remove('translate-y-[-600px]');
            classlist.add('translate-y-[0px]')
        } else {
            classlist.remove('translate-y-[0px]')
            classlist.add('translate-y-[-600px]');

        }


    }, [open]);

    return (
        <>
            <div style={{ backgroundImage: `url('./../../../public/assets/images/banner-header.jpeg')` }} className='relative bg-transparent bg-cover md:bg-cover bg-center bg-no-repeat'>

                <div className='custom-bg-for-linear-grad '>



                    <div className="navbar bg-primaryDark  md:bg-opacity-50 p-0  text-white  relative z-10">
                        <div className="navbar-start h-full ">
                            <div className='flex gap-2 w-fit p-3 px-5 bg-primaryDark justify-center md:ms-10 items-center'>
                                <div className='h-auto basis-1/2 '>
                                    <img className='h-[40px]  w-[40px] float-end' src="./assets/images/logo.svg" alt="" />
                                </div>
                                <a className="basis-1/2 font-semibold text-3xl">SolArt</a>
                            </div>

                        </div>

                        <div className="navbar-center hidden lg:flex me-0 md:me-12">
                            {/* On large */}
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details className="" >
                                        <summary className='parent'>Home</summary>
                                        <ul className="p-2 bg-gray-900 opacity-70 rounded-none text-white">
                                            <li><a>Sub 1</a></li>
                                            <li><a>Sub 2</a></li>
                                        </ul>
                                    </details>
                                </li>    <li>
                                    <details className="" >
                                        <summary className='parent'>Service</summary>
                                        <ul className="p-2  bg-gray-900 opacity-70 rounded-none text-white ">
                                            <li><a>Sub 1</a></li>
                                            <li><a>Sub 2</a></li>
                                        </ul>
                                    </details>
                                </li>    <li>
                                    <details className="" >
                                        <summary className='parent'>Project</summary>
                                        <ul className="p-2  bg-gray-900 opacity-70 rounded-none text-white">
                                            <li><a>Sub 1</a></li>
                                            <li><a>Sub 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="" >
                                        <summary className='parent'>Pages</summary>
                                        <ul className="p-2  bg-gray-900 opacity-70 rounded-none text-white ">
                                            <li><a>Sub 1</a></li>
                                            <li><a>Sub 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="" >
                                        <summary className='parent'>News</summary>
                                        <ul className="p-2  bg-gray-900 opacity-70 rounded-none text-white">
                                            <li><a>Sub 1</a></li>
                                            <li><a>Sub 2</a></li>
                                        </ul>
                                    </details>

                                </li>
                                <li><a>Contact</a></li>
                            </ul>
                            <div className='sm:hidden md:block'>
                                <CallAnytime />
                            </div>
                        </div>

                        <div className="md:hidden navbar-end">
                            <div className='md:hidden '>
                                <CallAnytime />
                            </div>
                            <div className="dropdown relative">
                                <div tabIndex={0} onClick={() => { setOpen(!open) }} role="" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M3.57031 12H21.5703" stroke="white" strokwidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.57031 6H21.5703" stroke="white" strokwidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.57031 18H21.5703" stroke="white" strokwidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>




                    {/*..................... Drop down on small devices...................  */}




                    <div tabIndex={0} id='hiddenNav' className={`text-white w-[100vw] z-0 floating-bg p-4 pt-20  md:hidden absolute top-[0%] translate-y-[-600px] transition-all duration-[1s] delay-0 ease-in-out text-right
                 
                    `}
                    >
                        <ul className=' w-[30vw] float-right menu  menu-vertical '>
                            <li>
                                <details className="" >
                                    <summary className='parent '> <span className=''> Home </span></summary>
                                    <ul className="p-2 ">
                                        <li><a>Sub 1</a></li>
                                        <li><a>Sub 2</a></li>
                                    </ul>
                                </details>
                            </li>    <li>
                                <details className="" >
                                    <summary className='parent'>Service</summary>
                                    <ul className="p-2 ">
                                        <li><a>Sub 1</a></li>
                                        <li><a>Sub 2</a></li>
                                    </ul>
                                </details>
                            </li>    <li>
                                <details className="" >
                                    <summary className='parent'>Project</summary>
                                    <ul className="p-2 ">
                                        <li><a>Sub 1</a></li>
                                        <li><a>Sub 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="" >
                                    <summary className='parent'>Pages</summary>
                                    <ul className="p-2 ">
                                        <li><a>Sub 1</a></li>
                                        <li><a>Sub 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="" >
                                    <summary className='parent'>News</summary>
                                    <ul className="p-2 ">
                                        <li><a>Sub 1</a></li>
                                        <li><a>Sub 2</a></li>
                                    </ul>
                                </details>

                            </li>
                            <li><a>Contact</a></li>
                        </ul>

                    </div>


                    <Banner className="" />
                </div>
            </div>

        </>
    );
}

export default Navbar;
