import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, refetch }) => {
    const navigate = useNavigate()
    const { _id, name, img, description, price, minQuantity, quantity } = product;

    const buyNowHandle = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-3 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title uppercase">{name}</h2>
                <small>{description}</small>

                <p className='font-semibold'>Min Order: <span className='text-accent'>{minQuantity}</span></p>
                <p className='font-semibold'>stock: <span className='text-accent'>{quantity}</span></p>

                <p className='font-bold'>Price per Unite: <span className='text-accent'>{price}</span></p>
                <div className='btn btn-primary py-3 bg-primary'>
                    <button onClick={() => buyNowHandle(_id)} className='font-bold '>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;