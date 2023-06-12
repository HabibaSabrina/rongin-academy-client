import React from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;