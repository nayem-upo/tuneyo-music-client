import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className='flex justify-center min-h-screen my-52'>
                <div
                    className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#9C29B2] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                </div>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default Private;