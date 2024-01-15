import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Homepage from '../pages/Homepage/Homepage';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Homepage/>
            <Footer/>
        </div>
    );
}

export default Layout;
