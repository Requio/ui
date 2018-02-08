export const CREATE_PROC = 'CREATE_PROC';
export const UPDATE_PROC = 'UPDATE_PROC';
export const REQUEST_PROC = 'REQUEST_PROC';
export const RECEIVE_PROC = 'RECEIVE_PROC';

export const updateProc = (field, value) => ({
  type: UPDATE_PROC,
  field,
  value,
});
