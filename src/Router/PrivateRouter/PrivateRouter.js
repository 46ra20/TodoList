import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    if(loading){
        return <p className='text-center text-3xl font-semibold my-12'>Loading...</p>
    }
    if(user?.uid){
        return children;
    }
    return navigate('/')
};

export default PrivateRouter;