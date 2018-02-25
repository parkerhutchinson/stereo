export const SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT';
export const CLOSE_ACTIVE_PROJECT = 'CLOSE_ACTIVE_PROJECT';

export const setActiveProject = (id) => ({
  type: 'SET_ACTIVE_PROJECT',
  id
})

export const closeActiveProject = (show) => ({
  type: 'CLOSE_ACTIVE_PROJECT',
  show
})
