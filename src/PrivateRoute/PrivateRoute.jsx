import { Navigate, useLocation } from "react-router";
import useAuthContext from "../custom_contexts/UseAuthContext";
import { useEffect } from "react";
import { notifyWarn } from "../utilities/notification";
import Loader from "../components/Loader/Loader";


const PrivateRoute = ({ children }) => {

    const { firebaseUser, isUserLoading } = useAuthContext()
    const { pathname } = useLocation()

    useEffect(() => {
        if (!isUserLoading && !firebaseUser) {
            notifyWarn("You need to log in first.")
        }
    }, [isUserLoading, firebaseUser])

    if (isUserLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><Loader></Loader></div>
    }

    if (!firebaseUser) {
        return <Navigate to={'/login'} state={pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;