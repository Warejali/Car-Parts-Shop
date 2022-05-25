import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:px-14">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-primary text-4xl'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-slate-700 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <NavLink to="/dashboard">My Profile</NavLink>
                        </li>
                        <li>
                            {
                                admin ? <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink> : <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                            }

                        </li>
                        <li>
                            {
                                admin ? <NavLink to="/dashboard/manageReview">Manage Reviews</NavLink> : <NavLink to="/dashboard/addReview">Add Review</NavLink>
                            }
                        </li>
                        <li>

                            {
                                admin && <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                            }

                        </li>

                        <li>

                            {
                                admin && <NavLink to="/dashboard/manageProducts">Manage Products</NavLink>
                            }

                        </li>
                        <li>

                            {
                                admin && <NavLink to="/dashboard/addProducts">Add Product</NavLink>
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;