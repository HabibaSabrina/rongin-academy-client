import React from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
            <Helmet><title>Rongin Academy | Dashboard</title></Helmet>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;