import React from 'react';
import { RouteProps as ReactRouteProps, Route as ReactRoute, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'



interface RouteProps extends ReactRouteProps {
 isPrivade?: boolean;
 component: React.ComponentType;
}


const Route: React.FC<RouteProps> = ({ isPrivade = false, component: Component, ...rest }) => {
 const { user } = useAuth();

 return (
  <ReactRoute
   {...rest}
   render={({ location }) => {
    return isPrivade === !!user ? (<Component />) : (<Redirect to={{ pathname: isPrivade ? '/' : '/dashboard', state: { from: location } }} />)
   }}
  />
 )
};
export default Route;