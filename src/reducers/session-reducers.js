import {
  SESSION_LOAD,
  SESSION_START,
  SESSION_ERROR,
} from '../actions';

const initialState = {
  authenticated: false,
  loading: true,
  error: null,
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_LOAD:
      return {
        ...state,
        loading: true,
      };
    case SESSION_START:
      return {
        ...state,
        authenticated: true,
        user: action.user,
        loading: false,
        error: null,
      }
    case SESSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
};
