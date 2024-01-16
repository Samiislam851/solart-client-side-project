import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div className='px-3 py-2 rounded-md bg-primaryDonkeyBrown text-white md:hover:scale-110 transition-all ease-in-out duration-300 md:hover:px-4 md:hover:rounded-lg'>
            {children}
        </div>
    );
}

export default PrimaryButton;
