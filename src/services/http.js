import axios from 'axios';
import { API_URL, API_VERSION } from '../constants';
import localStore from './local-store';

const store = localStore('ajax');

const httpConfig = {
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data, headers) => {
    headers['Content-Type'] = 'application/json;charset=UTF-8';
    headers['X-CSRF-Token'] = store.get('csrfToken');
    return JSON.stringify(data);
  }],
};

export const encodeParams = obj => Object.entries(obj).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');

export const encodeUrl = (url, params = {}) => `${url}?${encodeParams(params)}`;

const http = axios.create({
  ...httpConfig,
  baseURL: API_URL,
});

export const api = axios.create({
  ...httpConfig,
  baseURL: `${API_URL}/v${API_VERSION}`,
});

http.api = api;

export default http;
