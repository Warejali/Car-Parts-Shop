import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L0nKIAoWY7yZrZSU2q2yTbC0iM7MthnRVvIuj6F4pPk8CA8PVt3b6UtjPcSw9wNkl1ymIHuAs0CTomgV7inylLD00y3znsqyq');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: orders, isLoading, refetch } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: ` Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>ID {id}</h2>
            <div className='grid lg:grid-cols-2 lg:mx-24'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    {/* <figure className="px-10 pt-10">
                        <img src={orders.img} alt="Shoes" className="rounded-xl" />
                    </figure> */}
                    <div className="card-body items-center text-center">

                        <p className='font-bold'>Total Price {orders.price} USD</p>
                        <p className='font-bold'>Total Quantity {orders.orderQuantity}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl px-7">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;