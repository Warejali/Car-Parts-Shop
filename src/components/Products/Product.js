import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

const Product = ({ product, refetch }) => {
    const navigate = useNavigate()
    const { _id, name, img, description, price, minQuantity, quantity } = product;

    const buyNowHandle = id => {
        navigate(`/productDetails/${id}`);
    }
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-3 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title uppercase">{name}</h2>
                <small>{description}</small>
                <div className=' grid grid-cols-2 gap-10 px-5 py-2 rounded mb-7'>
                    <p className='font-semibold'>Min Order: <span className='text-accent'>{minQuantity}</span></p>
                    <p className='font-semibold'>stock: <span className='text-accent'>{quantity}</span></p>
                </div>
                <div className='btn-buy grid md:grid-cols-2 gap-5 py-3'>
                    <p className='font-bold'>Price per Unite: <span className='text-accent'>{price}</span></p>
                    <button onClick={() => buyNowHandle(_id)} className='font-bold'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;