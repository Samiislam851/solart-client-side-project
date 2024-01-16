import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import AboutOurCompany from '../../components/AboutOurCompany/AboutOurCompany';
import OurWork from '../../components/OurWork/OurWork';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import MeetOurTeem from '../../components/MeetOurTeem/MeetOurTeem';
import WhatWeDid from '../../components/WhatWeDid/WhatWeDid';

const Homepage = () => {
    return (
        <div className='overflow-custom-hidden            '>
      
            <OurServices />
            <AboutOurCompany/>
            <OurWork/>


            <HowWeWork/>

            <MeetOurTeem/>
            <WhatWeDid/>
        </div>
    );
}

export default Homepage;
