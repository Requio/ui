import { api } from '../services/http';

export const API_REQUEST = 'API_REQUEST';

export default store => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  const {
    endpoint,
    fetchType,
    responseType,
    errorType,
    context,
  } = action;

  next({ type: fetchType, ...context });

  return api.get(endpoint)
    .then(({ data }) => next({
      type: responseType,
      data: data,
      receivedAt: Date.now(),
    }))
    .catch((response) => next({
      type: errorType,
      errors: response,
      receivedAt: Date.now(),
    }));
};
