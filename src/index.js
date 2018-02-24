import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import history from './services/history';
import store from './services/store';
import { attachStore } from './models';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';

import './index.css';

attachStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
