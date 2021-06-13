import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  console.log('isAuthenticated === ', isAuthenticated);
  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (isAuthenticated) {
            return <Component {...props} />
          } else {
            return <Redirect exact to="/login" />
          }
        }
      }
    />
  );
};
 