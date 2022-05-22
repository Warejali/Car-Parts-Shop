import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;