import { combineReducers } from 'redux';
import * as modelReducers from './model-reducers';
import * as sessionReducers from './session-reducers';

export default combineReducers({
  ...modelReducers,
  ...sessionReducers,
});
