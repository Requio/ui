import { api } from '../services/http';

const API_REQUEST = 'API_REQUEST';

export default store => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  const { endpoint, actionTypes } = action;

  next({ type: 'REQUEST' });

  return api.get(endpoint)
    .then(({ data }) => next({
      type: 'SUCCESS',
      data: data,
      receivedAt: Date.now(),
    }))
    .catch(({ response: { data: { errors } } }) => next({
      type: 'ERROR',
      errors,
      receivedAt: Date.now(),
    }));
};
