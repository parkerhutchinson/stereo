export const SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT';
export const CLOSE_ACTIVE_PROJECT = 'CLOSE_ACTIVE_PROJECT';
export const SET_ESCAPE_CODE = 'SET_ESCAPE_CODE';

export const setEscapeCode = (code) => ({
  type: 'SET_ESCAPE_CODE',
  code
});

export const setActiveProject = (id) => ({
  type: 'SET_ACTIVE_PROJECT',
  id
});

export const closeActiveProject = (show) => ({
  type: 'CLOSE_ACTIVE_PROJECT',
  show
});
