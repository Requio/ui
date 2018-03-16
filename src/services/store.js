import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import apiMiddleware from '../middleware/api';
import debugMiddleware from '../middleware/debug';
import { modelMiddleware } from '../models';
import rootReducer from '../reducers';
import history from './history';

const historyMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      modelMiddleware,
      apiMiddleware,
      thunkMiddleware,
      historyMiddleware,
      debugMiddleware
    )
  )
);
