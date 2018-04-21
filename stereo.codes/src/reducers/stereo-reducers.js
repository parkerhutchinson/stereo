import { combineReducers } from 'redux';
import work from './work-reducer';
import connect from './connect-reducer';
import { NAVIGATION_OPEN } from '../actions/navigation-actions';
import { GRID_ACTIVATE } from '../actions/grid-actions';
import { SECTION_ADD } from '../actions/observer-actions';
import { MODAL_OPEN } from '../actions/modal-actions';
import { galleryImages } from '../store/about-store';

function navigation(state = { open: false }, action) {
  switch(action.type) {
    case NAVIGATION_OPEN:
      return Object.assign({}, state, { open: action.open });
    default:
      return state
  }
}

const gallery = (state = galleryImages) => {
  return state;
}

function grid(state = { activate: false }, action) {
  switch(action.type) {
    case GRID_ACTIVATE:
      return Object.assign({}, state, { activate: action.show });
    default:
      return state;
  }
}

function section(state = {}, action) {
  switch(action.type) {
    case SECTION_ADD:
      return Object.assign({}, state, action.section);
    default:
      return state;
  }
}

function modal(state = { open: false }, action) {
  switch(action.type) {
    case MODAL_OPEN:
      return Object.assign({}, state, { open: action.open });
    default:
      return state;
  }
}

const stereoApp = combineReducers({
  work,
  modal,
  connect,
  section,
  gallery,
  grid,
  navigation,
});

export default stereoApp;
