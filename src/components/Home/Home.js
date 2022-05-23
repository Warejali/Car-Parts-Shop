import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='lg:mx-14 mx-4'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;