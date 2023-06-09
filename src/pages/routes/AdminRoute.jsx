import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

// for the routes which can be accessed by admin only
const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <FaSpinner className='animate-spin text-green-600 w-8 h-8 mx-auto mt-20'></FaSpinner>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;