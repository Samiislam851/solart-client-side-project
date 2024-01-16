import React from 'react';

const VideoNFeedBack = ({ data }) => {
    return (
        <div className='overflow-visible pb-40'>



            <div className='px-5 md:px-16 py-20 md:py-32  max-w-[1600px] mx-auto'>
                <div className='flex gap-2'>
                    <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                    <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>Video & Feedback</h3>
                </div>
                <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold '>Let's See The Video &<br />
                    What Client Say About Our Project </h2>
            </div>




            <div className='relative overflow-visible'>


            


                <div>
                    {/* <video className='w-full' src=""></video> */}
                    <img src="./assets/images/video.jpeg" className='w-full' alt="" />
                </div>

                <div onClick={() => { console.log('Play video Clicked!!!') }} className='absolute scale-50 md:scale-100 top-0 left-0 md:top-40 md:left-40 cursor-pointer text-white text-xl font-medium hover:scale-110 transition-all ease-in-out duration-300'>
                    <div className='border border-white border-2 w-fit mx-auto rounded-full'>
                        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.2272 52.4326L54.0908 41.1362L34.2272 29.8398V52.4326Z" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>


                    <p>View Promo Video</p>
                </div>

               
                    <div className="absolute scale-75 md:scale-125 z-[1000] bottom-[-170px] md:bottom-[-70px]  w-60 md:w-96 h-auto right-2 md:right-40 bg-white rounded-lg  shadow-xl  shadow-lg py-8 text-center">
                        <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-primaryDonkeyBrown">What Clients Say</h2>

                    


                     
                        <p className="text-gray-600 p-3 mb-2">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris at sem.
                        </p>
                        <img
                            src="./assets/images/instructor1.jpeg"
                            alt="Client"
                            className="mx-auto mb-2 md:mb-4 rounded-full h-16 w-16 object-cover"
                        />

                        
                        <p className="text-lg font-semibold text-indigo-600 mb-1">John Doe</p>

                       
                        <p className="text-gray-500">Web Developer</p>
                    </div>
              

            </div>


        </div>


    );
}

export default VideoNFeedBack;
