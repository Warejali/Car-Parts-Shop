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
    const url = `https://pacific-eyrie-12324.herokuapp.com/order/${id}`
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
        <div className='mt-20'>
            <div className='grid lg:grid-cols-2 lg:mx-24 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <p className='font-bold text-gray-400'>Total Price {orders.price} USD</p>
                        <p className='font-bold text-gray-400'>Total Quantity {orders.orderQuantity}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-5">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;