import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Contexts/AuthContext';

const PrivateRoute = ({children}) => {
  const {loading, user} = useContext(UserContext);
  const location = useLocation();

  if(loading){
    <progress className="progress w-56"></progress>
  }
  if(user && user.uid){
    return children;
  }
  else{
    return <Navigate to='/login' state={{from: location}} replace />
  }
};

export default PrivateRoute;