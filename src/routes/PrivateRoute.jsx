import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}
export default PrivateRoute;