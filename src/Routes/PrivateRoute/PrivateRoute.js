import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
