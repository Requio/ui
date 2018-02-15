import React from 'react';
import { connectWithRouter } from '../utils';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export const AuthRouteComponent = ({ authenticated, component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      authenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
    )
  } />
);

export default connectWithRouter(
  ({ session: { authenticated } }) => ({
    authenticated,
  })
)(AuthRouteComponent);
