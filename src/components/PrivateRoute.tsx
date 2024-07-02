import React from 'react';
import { Navigate} from 'react-router-dom';

interface PrivateRouteProps  {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    token ? <Component {...rest} /> : <Navigate to="/login" />
  );
  
};

export default PrivateRoute;
