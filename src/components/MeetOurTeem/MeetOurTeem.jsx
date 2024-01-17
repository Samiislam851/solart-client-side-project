import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const MeetOurTeem = () => {



    const svg = <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="252" viewBox="0 0 1303 252" fill="none">
        <path opacity="0.3" d="M-27.3732 1.78342C31.9616 40.0866 182.742 118.163 311.184 124.043C471.736 131.394 635.59 31.3092 744.969 69.436C854.348 107.563 866.04 252.188 1003.01 248.975C1139.99 245.761 1181.56 106.914 1302.56 94.6093" stroke="#B98E75" stroke-width="4" stroke-dasharray="8 8" />
    </svg>

    const teamMembers =
        [
            {
                "image": "./assets/images/instructor1.jpeg",
                "title": "John Doe",
                "profession": "Web Developer"
            },
            {
                "image": "./assets/images/instructor2.jpeg",
                "title": "Jaden Smith",
                "profession": "Graphic Designer"
            },
            {
                "image": "./assets/images/instructor3.jpeg",
                "title": "Alex Johnson",
                "profession": "Marketing Specialist"
            },
            {
                "image": "./assets/images/instructor4.jpeg",
                "title": "Evan Williams",
                "profession": "Software Engineer"
            }
        ]
    // teamMembers.map(data=>console.log(data))

    return (
        <div className='px-5 md:px-16 py-20 md:py-32 max-w-[1600px] mx-auto relative'>

            <div className='absolute top-[-40px] md:top-[0px] left-[-400px] md:left-10  rotate-[5deg]'>
                {svg}
            </div>

            <div className='z-[20]'>
                <div className='flex gap-2'>
                    <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                    <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>Meet Our Team</h3>
                </div>
                <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold '>Let's See Our Expert <br />
                    Engineers & Designers</h2>
            </div>
            <div className='grid grid-cols-2 pt-20 gap-4 md:grid-cols-4'>
                {teamMembers.map((data, i) => <TeamMember key={i} data={data} />)}
            </div>
        </div>
    );
}

export default MeetOurTeem;
