import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as modelReducers from './model-reducers';
import * as sessionReducers from './session-reducers';

console.log(modelReducers);

export default combineReducers({
  router: routerReducer,
  ...modelReducers,
  ...sessionReducers,
});
