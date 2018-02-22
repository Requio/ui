import { combineModelReducers } from './base-model';

import Proc from './proc';
import Task from './task';
import Action from './action';

export const reducers = combineModelReducers(
  Proc,
  Task,
  Action,
);
