import { combineReducers } from 'redux';
import { SHOW_HAMBURGER } from '../actions/navigation-actions';


function hamburgNavigation(state = { show: false }, action) {

  switch(action.type) {
    case SHOW_HAMBURGER:
      return { show: action.show };
    default:
      return state
  }
}

const stereoApp = combineReducers({
  hamburgNavigation,
});

export default stereoApp;
