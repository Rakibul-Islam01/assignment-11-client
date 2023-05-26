import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation();
    if(loading){
        return <progress className="progress w-56 block mx-auto h-3 my-12"> </progress>
    }

    if(user){
        return children;
    }


    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;