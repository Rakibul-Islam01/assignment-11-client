import React from 'react';
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }


    return <Navigate state={{from:location}} to="/login"></Navigate>
};

export default PrivateRoute;