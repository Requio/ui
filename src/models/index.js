import { initialize } from 'redux-sideloader';

import { api } from '../services/http';

import Proc from './proc';
import Task from './task';
import Action from './action';

const { reducers, attachStore, modelMiddleware } = initialize(api)(
  Proc,
  Task,
  Action,
);

export { reducers, attachStore, modelMiddleware };
