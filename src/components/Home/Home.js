import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='lg:mx-14 mx-4'>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;