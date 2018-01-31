import {
  REQUEST_PROCS,
  RECEIVE_PROCS,
  CREATE_PROC,
  UPDATE_PROC,
} from '../actions';
import { recordState } from './base';

export const procs = (state = recordState, action) => {
  switch (action.type) {
    case REQUEST_PROCS:
      return {
        ...state,
        isFetching: true,
        stale: false,
      };
    case RECEIVE_PROCS:
      return {
        ...state,
        isFetching: false,
        stale: false,
        records: action.posts,
        lastUpdated: action.receivedAt,
      };
    case CREATE_PROC:
      return [
        ...state,
        action.proc,
      ];
    case UPDATE_PROC:
      return state.map(proc => {
        if (proc.id === action.id) {
          return {
            ...proc,
            [action.field]: action.value,
          }
        }
        return proc;
      });
    default:
      return state;
  }
};

export const actions = (state = recordState, action) => {
  return state;
};

export const tasks = (state = recordState, action) => {
  return state;
};

export const library = (state = recordState, action) => {
  return state;
};

export const libraryItems = (state = recordState, action) => {
  return state;
};

export const thread = (state = recordState, action) => {
  return state;
};

export const threadMessage = (state = recordState, action) => {
  return state;
};
