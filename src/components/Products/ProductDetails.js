import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';
import auth from '../../firebase.init';


const ProductDetails = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [products] = useProductDetails(id);
    let { _id, name, img, description, price, minQuantity, quantity } = products;
    const navigate = useNavigate()


    const submitForm = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        const order = {
            productId: _id,
            product: name,
            orderQuantity,
            price: price * orderQuantity,
            userEmail: user.email
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("done")
            })

    }



    return (
        <div class="hero min-h-screen lg:mx-auto">
            <div class="hero-content grid grid-cols-2 gap-20 px-16">
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
                <form onSubmit={submitForm}>
                    <div className='flex-1'>
                        <h1 class="text-3xl font-bold">{name}</h1>
                        <small>{description}</small>
                        <p class="py-3 font-bold">Price per unit: ${price}</p>
                        <p class="py-3 font-bold">Stock Quantity: {quantity}</p>
                        <div>
                            <input type="number" name='orderQuantity' placeholder="type quantity" class="input input-bordered input-primary max-w-xs" />
                        </div>
                        <div className='py-3'>
                            <button class="btn btn-primary">Check Out</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;