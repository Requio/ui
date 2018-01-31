import React, { Component } from 'react';
import { login } from './services/session';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <button onClick={login('google-oauth2')}>Log in with Google</button>
        <button onClick={login('github-oauth2')}>Log in with Github</button>
      </div>
    );
  }
}

export default App;
