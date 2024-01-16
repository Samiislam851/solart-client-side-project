import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import AboutOurCompany from '../../components/AboutOurCompany/AboutOurCompany';
import OurWork from '../../components/OurWork/OurWork';

const Homepage = () => {
    return (
        <div className='overflow-custom-hidden            '>
      
            <OurServices />
            <AboutOurCompany/>
            <OurWork/>
        </div>
    );
}

export default Homepage;
