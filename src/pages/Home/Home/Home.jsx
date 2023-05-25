import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CarToyTabs from '../../../components/CarToyTabs/CarToyTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CarToyTabs></CarToyTabs>
        </div>
    );
};

export default Home;