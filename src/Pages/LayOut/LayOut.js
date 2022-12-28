import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Shared/MenuBar/MenuBar';

const LayOut = () => {
    return (
        <div>
            <Menubar/>
            <Outlet/>
        </div>
    );
};

export default LayOut;