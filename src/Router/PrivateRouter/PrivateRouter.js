import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <p className='text-center text-3xl font-semibold my-12'>Loading...</p>
    }
    if(!user){
        return <Navigate to={'/login'} />;
    }
    return children;
};

export default PrivateRouter;