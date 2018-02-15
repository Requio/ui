import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';
import history from './history';

const historyMiddleware = routerMiddleware(history);

export default createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    historyMiddleware
  )
);
