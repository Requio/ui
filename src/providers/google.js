import {
  REDIRECT_URI,
  GOOGLE_OAUTH_URL,
  GOOGLE_CLIENT_ID,
} from '../constants';
import { encodeUrl } from '../services/http';
import base from './base';

export default {
  ...base,
  buildAuthorizeUrl() {
    return encodeUrl(GOOGLE_OAUTH_URL, {
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      include_granted_scopes: true,
      response_type: 'code',
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/gmail.send',
    });
  },
};
