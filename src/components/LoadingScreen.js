import React from 'react';

const LoadingScreen = ({ msg }) => (
  <div>{ msg ? msg : 'Loading...' }</div>
);

export default LoadingScreen;
