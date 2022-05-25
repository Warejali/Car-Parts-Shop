import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='lg:mx-14 mx-4'>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;