import React, { useEffect, useState } from 'react';
import './Navbar.css'
import Banner from '../Banner/Banner';
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


    console.log(open);
    return (
        <>
            <div style={{ backgroundImage: `url('./../../../public/assets/images/banner-header.jpeg')` }} className='relative bg-transparent bg-cover md:bg-cover bg-center bg-no-repeat'>

                <div className='custom-bg-for-linear-grad'>



                    <div className="navbar bg-primaryDark  md:bg-opacity-50  text-white  relative z-10">
                        <div className="navbar-start">
                            <div className='flex btn btn-ghost justify-center items-center'>
                                <div className='h-auto '>
                                    <img className='h-[50%]  w-[50%] float-end' src="./assets/images/logo.svg" alt="" />
                                </div>
                                <a className=" text-3xl">SolArt</a>
                            </div>

                        </div>

                        <div className="navbar-center hidden lg:flex">

                            <ul className="menu menu-horizontal px-1">
                                <li><a>Item 1</a></li>
                                <li>
                                    <details>
                                        <summary>Parent</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                            <div className='sm:hidden md:block'>
                                Call Us
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className='md:hidden'>
                                Call Us
                            </div>
                            <div className="dropdown relative">
                                <div tabIndex={0} onClick={() => { setOpen(!open) }} role="" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M3.57031 12H21.5703" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.57031 6H21.5703" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.57031 18H21.5703" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Drop down  */}
                    <ul tabIndex={0} id='hiddenNav' className={`text-white w-[100vw] z-0 floating-bg p-4 pt-20  md:hidden absolute top-[0%] translate-y-[-600px] transition-all duration-[1s] delay-0 ease-in-out text-right`}
                    >
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>




                    <Banner className="" />
                </div>
            </div>

        </>
    );
}

export default Navbar;
