import {
  REDIRECT_URI,
  GITHUB_OAUTH_URL,
  GITHUB_CLIENT_ID,
} from '../constants';
import { encodeUrl } from '../services/http';
import base from './base';

export default {
  ...base,
  buildAuthorizeUrl() {
    return encodeUrl(GITHUB_OAUTH_URL, {
      client_id: GITHUB_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: 'user,email',
    });
  },
};
