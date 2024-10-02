import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const RequireAdmin = () => {
  const user = Cookies.get('token'); 
  const role = Cookies.get('role')
  if(!user){
    return <Navigate to="/" replace />; 
  }
  if (user && (role === 'Owner'|| role ==='Customer')) {
    return <Navigate to="/" replace />; 
  }
  return <Outlet />; 
};
export const RequireCustomer = () => {
    const user = Cookies.get('token');
    const role = Cookies.get('role');
    if (!user){
        return <Navigate to="/" replace />;
    }
    if (user && role === 'Owner') {
      return <Navigate to="/" replace />;
    }
    if (user && role === 'Admin') {
        return <Navigate to="/admin" replace />;
      }
  
    return <Outlet />; 
};
export const RequireOwner = () => {
    const user = Cookies.get('token');
    const role = Cookies.get('role');
    if (!user){
        return <Navigate to="/" replace />;
    }
    if (user && role === 'Customer') {
      return <Navigate to="/" replace />;
    }
    if(user && role ==='Admin'){
        return <Navigate to="/admin" replace />;
    }
  
    return <Outlet />; 
};
export const RequireCustomerOrOwner = () => {
    const user = Cookies.get('token'); 
    const role = Cookies.get('role');
    if(!user){
        return <Navigate to="/" replace />;
    }
    if( user && role !== 'Customer' && role !== 'Owner'){
      return <Navigate to="/admin" replace />;
    }
    return <Outlet />; 
  };
  export const RequireCustomerOrOwnerOrGuest = () => {
    const user = Cookies.get('token'); 
    const role = Cookies.get('role');
    if( user && role !== 'Customer' && role !== 'Owner'){
      return <Navigate to="/admin" replace />;
    }
    return <Outlet />; 
  };

export default RequireAdmin