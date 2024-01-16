import React from 'react';

const CallAnytime = () => {
    return (
        <div>
            <div className="h-full flex items-center gap-2 w-fit justify-center">
                <div className=' '>
                    <div className=" rounded-full  p-3 bg-gray-200">
                        <img src="./assets/images/icons/call.svg" alt="Logo" className="max-h-full max-w-full" />
                    </div>
                </div>



                <div className=''>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-fit "> Call Anytime</div>
                        <div className="font-light text-sm ">+0987654321</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallAnytime;
