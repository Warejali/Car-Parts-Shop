import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])
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
                            <th>Payment</th>
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
                                    <td className='border'>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-primary'>Pay Now</button>
                                    </Link>}</td>
                                    <td>{(order.price && order.paid) && <span className=' text-success'>Paid</span>}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;