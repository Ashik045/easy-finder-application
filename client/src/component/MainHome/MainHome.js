import React from 'react';
import Explore from '../Explore/Explore';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Helped from '../Helped/Helped';
import JobType from '../JobType/JobType';
import Navbar from '../Navbar/Navbar';
import NextJob from '../NextJob/NextJob';
import SignupSec from '../SignupSec/SignupSec';

const MainHome = () => (
    <div>
        <Navbar />
        <Header />
        <JobType />
        <NextJob />
        <Explore />
        <Helped />
        <SignupSec />
        <Footer />
    </div>
);

export default MainHome;
