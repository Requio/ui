import axios from 'axios';
import { API_URL } from '../constants';
import localStore from '../utils/local-store';

const store = localStore('ajax');

export const encodeParams = obj => Object.entries(obj).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');

export const encodeUrl = (url, params = {}) => `${url}?${encodeParams(params)}`;

export default axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data, headers) => {
    headers['Content-Type'] = 'application/json;charset=UTF-8';
    headers['X-CSRF-Token'] = store.get('csrfToken');
    return JSON.stringify(data);
  }],
});
