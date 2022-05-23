import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';


const ProductDetails = () => {
    const { id } = useParams();
    const [products] = useProductDetails(id);
    let { name, img, description, price, minQuantity, quantity } = products;
    const navigate = useNavigate()


    const submitForm = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        return orderQuantity
    }



    return (
        <div class="hero min-h-screen lg:mx-auto">
            <div class="hero-content grid grid-cols-2 gap-20 px-16">
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 class="text-3xl font-bold">{name}</h1>
                    <small>{description}</small>
                    <p class="py-3 font-bold">Price per unit: ${price}</p>
                    <p class="py-3 font-bold">Stock Quantity: {quantity}</p>
                    <p class="py-3 font-bold">Order Quantity: </p>
                    <div>
                        <form onSubmit={submitForm}>
                            <input type="number" name='orderQuantity' placeholder="Type here" class="input input-bordered input-primary max-w-xs" />
                            <input className='btn btn-xs btn-primary mx-3' type="button" value="Add Quantity" />
                        </form>
                    </div>
                    <div className='py-3'>
                        <button class="btn btn-primary">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;