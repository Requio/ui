import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as modelReducers from './model-reducers';
import * as sessionReducers from './session-reducers';

export default combineReducers({
  router: routerReducer,
  ...modelReducers,
  ...sessionReducers,
});
