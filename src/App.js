import React, { Component } from 'react';
import Auth from './containers/Auth';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <Auth />
      </div>
    );
  }
}

export default App;
