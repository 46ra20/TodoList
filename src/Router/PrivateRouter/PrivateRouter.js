import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    //call loading page
    if(loading){
        return <p className='text-3xl text-center my-10 animate-bounce'>Loading...</p>
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to={'/login'} state= {{from: location}} replace={true}></Navigate>
};

export default PrivateRouter;