import React from 'react';
       import Hero from '../components/Hero';
import Banner from '../components/Banner';
import TrendingApp from '../components/TrendingApp';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Banner/>
            <TrendingApp/>
        </div>
    );
};

export default Home;