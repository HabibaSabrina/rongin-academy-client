import React from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';
import StudentHome from '../Dashboard/DashboardHome/StudentHome';

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;