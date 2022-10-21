import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

/**
 1. only allow authenticated user can visit the route
 2. 
 3. Redirect user to the route they wanted to go before
 */

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
    return (
      <>
        <Spinner
          animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    )
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
  }
  return children;
};

export default PrivateRoute;