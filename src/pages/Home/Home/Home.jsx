import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CarToyTabs from '../../../components/CarToyTabs/CarToyTabs';
import EsectionOne from '../../../components/EsectionOne/EsectionOne';
import EsectionTwo from '../../../components/EsectionTwo/EsectionTwo';

const Home = () => {
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