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
            minQuantity,
            img,
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
                navigate('/dashboard/myOrders')
            })
    }



    return (
        <div>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title w-96 mx-auto">
                    <h2 className='text-2xl text-primary font-bold'>Product Details</h2>
                </div>
                <div class="collapse-content">
                    <div className="hero lg:mx-auto">
                        <div className="hero-content grid lg:grid-cols-2 lg:gap-20 lg:px-16">
                            <div>
                                <img className='lg:w-80' src={img} alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">{name}</h1>
                                <small>{description}</small>
                                <p className="py-3 font-bold">Price per unit: ${price}</p>
                                <p className="py-3 font-bold">Stock Quantity: {quantity}</p>
                                <p className="py-3 font-bold">Min Order Quantity: {minQuantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div>
                <div className='lg:w-96 mx-auto'>
                    <form onSubmit={submitForm}>
                        <div className='flex-1'>
                            <p className="py-3 font-bold">Price per unit: ${price}</p>
                            <p className="py-3 font-bold">Stock Quantity: {quantity}</p>
                            <p className="py-3 font-bold">Min Order Quantity: {minQuantity}</p>
                            <div>
                                <input type="number" name='orderQuantity' placeholder="type quantity" className="input input-bordered input-primary max-w-xs" />
                            </div>
                        </div>
                        <div className='py-3'>
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;