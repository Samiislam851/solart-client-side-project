import React from 'react';

const ContactInfo = () => {
    return (
        <div className='border-t-primaryDonkeyBrown border-t-2 pt-2 mt-36'>
            <div className='grid grid-cols-2 md:grid-cols-3  mx-auto  px-5 md:px-16   max-w-[1600px]'>


              
                <div className=' p-5 md:p-20'>

                    <div className='flex flex-col items-start justify-center gap-2 text-start w-fit mx-auto'>
                        <img src="./assets/images/icons/two-bars.svg" alt="" />
                        <h3 className='text-primaryDonkeyBrown md:text-2xl'>Phone</h3>
                        <p className='md:text-2xl'>+1 203-123-0606</p>
                    </div>
                </div>
                <div className='md:border-e-2 border-s-2 md:border-e-primaryDonkeyBrown border-s-primaryDonkeyBrown p-5 md:p-20'>

                    <div className='flex flex-col items-start justify-center gap-2 text-start w-fit mx-auto'>
                        <img src="./assets/images/icons/two-bars.svg" alt="" />
                        <h3 className='text-primaryDonkeyBrown md:text-2xl'>Email</h3>
                        <p className='md:text-2xl'>architecture@bauen.com</p>
                    </div>
                </div>
                <div className=' p-20'>

                    <div className='flex flex-col items-start justify-center gap-2 hidden md:block text-start w-fit mx-auto'>
                        <img src="./assets/images/icons/two-bars.svg" alt="" />
                        <h3 className='text-primaryDonkeyBrown text-2xl'>Our Address</h3>
                        <p className='text-2xl'>24 King St, Charleston, SC 29401 USA</p>
                    </div>
                </div>
               




            </div>


        </div>
    );
}

export default ContactInfo;
