import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ authenticated, login }) => {
  if (authenticated) {
    return <Redirect exact to="/" />;
  }
  return (
    <div>
      <button onClick={() => login('google-oauth2')}>Log in with Google</button>
      <button onClick={() => login('github-oauth2')}>Log in with Github</button>
    </div>
  );
};

export default LoginForm;
