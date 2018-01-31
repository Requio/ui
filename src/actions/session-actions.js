export const SESSION_START = 'SESSION_START';
export const SESSION_TERMINATE = 'SESSION_TERMINATE';

export const startSession = user => ({
  type: SESSION_START,
  user,
});
