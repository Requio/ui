export default {
  buildAuthorizeUrl() {
    throw new Error('buildAuthorizeUrl() must be implemented by each provider');
  },
  extractError(redirectUrl) {
    const errorMatch = redirectUrl.match(/error=([^&]+)/);
    if (errorMatch) {
      return new Error(`Error during login. Reason: ${errorMatch[1]}`);
    }
  },
  extractSession(redirectUrl) {
    const [, params] = redirectUrl.split('?');
    const { code } = params.split('&').reduce((memo, pair) => {
      const [key, value] = pair.split('=');
      return { ...memo, [key]: decodeURIComponent(value) };
    }, {});
    return {
      authorizationCode: code,
    };
  },
  validateSession() {
    throw new Error('not implemented');
  },
  getAccessToken(/* { accessToken } */) {
    throw new Error('not implemented');
  },
  getSignOutUrl() {
    throw new Error('not implemented');
  },
};
