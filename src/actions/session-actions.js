export const SESSION_LOAD = 'SESSION_LOAD';
export const SESSION_START = 'SESSION_START';
export const SESSION_TERMINATE = 'SESSION_TERMINATE';
export const SESSION_ERROR = 'SESSION_ERROR';

export const loadSession = () => ({
  type: SESSION_LOAD,
});

export const startSession = user => ({
  type: SESSION_START,
  user,
});

export const errorSession = error => ({
  type: SESSION_ERROR,
  error,
});
