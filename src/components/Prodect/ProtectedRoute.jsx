import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const authUser = () => {
    const user = {login : true}; 

    return user && user.login
}
const ProtectedRoute = () =>{
    const isAuthenticated = authUser();
    return isAuthenticated ? 
        <Outlet />: (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;
