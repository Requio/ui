import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducers as modelReducers } from '../models';
import * as sessionReducers from './session-reducers';

export default combineReducers({
  router: routerReducer,
  ...modelReducers,
  ...sessionReducers,
  // ui: combineReducers(uiReducers),
});
