import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <FaSpinner className='animate-spin text-green-600 w-8 h-8 mx-auto mt-20'></FaSpinner>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>;
};

export default PrivateRoute;