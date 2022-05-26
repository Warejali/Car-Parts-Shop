import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAllOrders = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState();

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://pacific-eyrie-12324.herokuapp.com/order?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: ` Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to delete?');
        if (proceed) {
            const url = `https://pacific-eyrie-12324.herokuapp.com/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = order.filter(o => o._id !== id);
                    setOrder(remaining);
                    toast.success("Product has been deleted")
                    refetch()
                })
        }
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-primary font-bold py-2'>Total orders {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Transaction ID</th>
                            <th>Payment</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th className='border'>{index + 1}</th>
                                    <td className='border'>{order.product}</td>
                                    <td className='border'>${order.price}</td>
                                    <td className='border'>{order.orderQuantity}</td>
                                    <td className='border'>{order.transactionId}</td>
                                    <td className='border'>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-primary'>Pay Now</button>
                                    </Link>}

                                        {(order.price && order.paid) && <span className=' text-white btn btn-success btn-sm btn-disabled'>Paid</span>}
                                    </td>
                                    <td className='border'>
                                        {
                                            !order.paid ? <button onClick={() => handleDelete(order._id)} class="btn btn-xs">Cancel <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button> : <button disabled className='btn btn-xs'>Cancel</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllOrders;