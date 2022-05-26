import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq';
import Reviews from './Reviews';
import Team from './Team';

const Home = () => {
    return (
        <div className='lg:mx-14 mx-4'>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <Team></Team>
            <Faq></Faq>
        </div>
    );
};

export default Home;