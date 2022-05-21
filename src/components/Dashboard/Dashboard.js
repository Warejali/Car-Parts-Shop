import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div>
            <DashboardSidebar>
                <Outlet></Outlet>
            </DashboardSidebar>
        </div>
    );
};

export default Dashboard;