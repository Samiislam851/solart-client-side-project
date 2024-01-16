import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const MeetOurTeem = () => {
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
        <div className='px-5 md:px-16 py-20 md:py-32  max-w-[1600px] mx-auto'>
            <div className='basis-[70%] md:basis-1/2 bottom-10   px-5 md:px-16   max-w-[1600px] mx-auto'>
                <div className='flex gap-2'>
                    <img src="./assets/images/icons/two-bars.svg" className='w-[60px]' alt="" />
                    <h3 className='text-xl md:text-3xl my-2 font-semibold z-10'>Meet Out Team</h3>
                </div>
                <h2 className='text-2xl md:text-5xl md:py-5 font-medium md:font-bold '>Let's See Our Expert <br />
                    Engineer & Designer</h2>
            </div>
            <div className='grid grid-cols-2 pt-20 gap-4 md:grid-cols-4'>
                {
                    teamMembers.map((data, i) => 

                        
                        <TeamMember key={i} data={data} ></TeamMember>
                   
                     
                    )}
                
            </div>
        </div>
    );
}

export default MeetOurTeem;
