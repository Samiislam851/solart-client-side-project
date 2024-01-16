import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import AboutOurCompany from '../../components/AboutOurCompany/AboutOurCompany';
import OurWork from '../../components/OurWork/OurWork';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import MeetOurTeem from '../../components/MeetOurTeem/MeetOurTeem';
import WhatWeDid from '../../components/WhatWeDid/WhatWeDid';
import VideoNFeedBack from '../../components/VideoNFeedBack';
import CountUpWorks from '../../components/CountUpWorks/CountUpWorks';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Homepage = () => {
    return (
        <div className='overflow-custom-hidden    font-Saira        '>
      
            <OurServices />
            <AboutOurCompany/>
            <OurWork/>


            <HowWeWork/>

            <MeetOurTeem/>
            <WhatWeDid/>
            <VideoNFeedBack/>
            <CountUpWorks/>
            <ContactInfo/>
        </div>
    );
}

export default Homepage;
