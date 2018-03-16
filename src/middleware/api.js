import { api } from '../services/http';

export const API_REQUEST = 'API_REQUEST';

export default () => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  const {
    endpoint,
    requestType,
    responseType,
    errorType,
    context,
  } = action;

  next({ type: requestType, ...context });

  return api.get(endpoint)
    .then(({ data }) => next({
      type: responseType,
      data,
      receivedAt: Date.now(),
    }))
    .catch((response) => next({
      type: errorType,
      errors: response,
      receivedAt: Date.now(),
    }));
};
