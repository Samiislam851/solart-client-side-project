import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
const TeamMember = ({ data }) => {
    console.log(data);
    return (
        <div style={{backgroundImage:`url(${data.image})`}} className="relative h-[200px] bg-cover bg-center  md:h-[400px] border-gray-200   group overflow-hidden">
            <div className='flex gap-3 absolute top-0 md:top-[-10%] group-hover:top-0 transition-all ease-in-out duration-300  group-hover:bg-opacity-50 p-2 '>
                <FiFacebook  className='text-primaryDonkeyBrown bg-white' />
                <FiTwitter className='text-primaryDonkeyBrown bg-white' />
                <FiLinkedin className='text-primaryDonkeyBrown bg-white' />
            </div>
           
            <div className=" absolute bg-gray-900 p-2 w-full group-hover:bottom-0 bottom-0 md:bottom-[-200px] bg-opacity-50 transition-all ease-in-out text-center duration-300  ">
                <h3 className="text-sm md:text-lg text-white font-medium pb-1 md:pb-3">
                        {data.title}
                </h3>
                <h3 className="text-sm md:text-lg text-white font-normal  text-gray-900">
                        {data.profession}
                </h3>
            </div>
         
        </div>
    );
}

export default TeamMember;
