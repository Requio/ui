import RSA from 'react-simple-auth'
import http from './http';
import { loadSession, startSession, errorSession } from '../actions';
import providers from '../providers';
import { API_URL, CSRF_TOKEN } from '../constants';
import localStore from './local-store';

const store = localStore('ajax');

export const getSession = () => {
  return dispatch => {
    dispatch(loadSession());
    return http.get(`${API_URL}/session`)
      .then(({ data: { users: [user] } }) => {
        dispatch(startSession(user));
        store.set(CSRF_TOKEN, user[CSRF_TOKEN]);
        return user;
      })
      .catch(err => dispatch(errorSession(err)));
  };
};

export const openSession = provider => {
  return dispatch => {
    dispatch(loadSession());
    RSA.acquireTokenAsync(providers[provider])
      .then(tokens => http.post(`${API_URL}/session/${provider}`, tokens))
      .then(({ data: { user } }) => dispatch(startSession(user)))
      .catch(err => dispatch(errorSession(err)));
  };
};
