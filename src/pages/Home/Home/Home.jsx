import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CarToyTabs from '../../../components/CarToyTabs/CarToyTabs';
import EsectionOne from '../../../components/EsectionOne/EsectionOne';
import EsectionTwo from '../../../components/EsectionTwo/EsectionTwo';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CarToyTabs></CarToyTabs>
            <EsectionOne></EsectionOne>
            <EsectionTwo></EsectionTwo>
        </div>
    );
};

export default Home;