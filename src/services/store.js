import { createStore, applyMiddleware } from 'redux';
import { default as thunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import history from './history';

const historyMiddleware = routerMiddleware(history);

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    historyMiddleware
  )
);
