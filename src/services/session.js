import RSA from 'react-simple-auth'
import http from './http';
import providers from '../providers';
import store from '../store';
import { startSession } from '../actions';
import { API_URL } from '../constants';

export const login = provider => async () => {
  const tokens = await RSA.acquireTokenAsync(providers[provider])
  const session = await http.post(`${API_URL}/session/${provider}`, tokens);
  store.dispatch(startSession(session));
  return session;
}
