export const SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT';
export const CLOSE_ACTIVE_PROJECT = 'CLOSE_ACTIVE_PROJECT';
export const SET_ESCAPE_CODE = 'SET_ESCAPE_CODE';
export const DECREMENT_ACTIVE_PROJECT = 'DECREMENT_ACTIVE_PROJECT';
export const INCREMENT_ACTIVE_PROJECT = 'INCREMENT_ACTIVE_PROJECT';

export const setEscapeCode = (code) => ({
  type: 'SET_ESCAPE_CODE',
  code
});

export const setActiveProject = (id) => ({
  type: 'SET_ACTIVE_PROJECT',
  id
});

export const getNextActiveProject = (id) => ({
  type: 'INCREMENT_ACTIVE_PROJECT',
  id
});

export const getPrevActiveProject = (id) => ({
  type: 'DECREMENT_ACTIVE_PROJECT',
  id
});

export const closeActiveProject = (show) => ({
  type: 'CLOSE_ACTIVE_PROJECT',
  show
});


