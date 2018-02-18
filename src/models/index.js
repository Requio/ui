import { combineModelReducers } from './base-model';

import Proc from './proc';
import Task from './task';

export const reducers = combineModelReducers(
  Proc,
  Task,
);
