import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-slate-700 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <NavLink to="/dashboard/myProfile">My Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addReview">Add Review</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageProducts">Manage Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addProducts">Add Products</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;