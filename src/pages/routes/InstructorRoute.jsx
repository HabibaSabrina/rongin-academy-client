import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";

// for the routes which can be accessed by admin only
const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <FaSpinner className='animate-spin text-green-600 w-8 h-8 mx-auto mt-20'></FaSpinner>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;