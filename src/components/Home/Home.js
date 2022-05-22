import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mx-14'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;