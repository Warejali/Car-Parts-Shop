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
        fetch('https://pacific-eyrie-12324.herokuapp.com/order', {
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
        navigate('/dashboard/MyAllOrders')
    }



    return (
        <div>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title w-96 mx-auto bg-red-100 rounded-xl mt-5 text-center">
                    <h2 className='text-2xl text-primary font-bold uppercase'>Product Details</h2>
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
                <div class="hero bg-base-200">

                    <div class="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 my-5">
                        <form onSubmit={submitForm} class="card-body">
                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Please enter less than {quantity} or greater than {minQuantity} or equal</span>
                                    </label>
                                    <input type="number" name='orderQuantity' placeholder="type quantity" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" value={user.displayName} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" value={user.email} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder='type your phone number' class="input input-bordered" />
                                </div>
                                <div class="form-control my-5">
                                    <label class="label">
                                        <span class="label-text">Address line</span>
                                    </label>
                                    <input type="text" placeholder='Address line' class="input input-bordered" />
                                </div>

                                <div class="form-control my-5">
                                    <label class="label">
                                        <span class="label-text">City</span>
                                    </label>
                                    <input type="text" placeholder='City' class="input input-bordered" />
                                </div><div class="form-control my-5">
                                    <label class="label">
                                        <span class="label-text">Country</span>
                                    </label>
                                    <input type="text" placeholder='Country' class="input input-bordered" />
                                </div>

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;