import { combineReducers } from 'redux';
import { SHOW_HAMBURGER } from '../actions/navigation-actions';
import { SHOW_WORK } from '../actions/work-actions';
import { SHOW_GRID } from '../actions/grid-actions';

function hamburgNavigation(state = { show: false }, action) {

  switch(action.type) {
    case SHOW_HAMBURGER:
      return { show: action.show };
    default:
      return state
  }
}

function gallery() {
  const galleryImages = [
    {image: 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG'},
    {image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-0.3.5&s=d5b622e2ea747f0eaa17e73a2040031a'},
    {image: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&w=3150&q=80'},
    {image: 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG'},
  ]
  return galleryImages;
}

function workModal(state = { show: false }, action) {
  switch(action.type) {
    case SHOW_WORK:
      return { show: action.show }
    default:
      return state;
  }
}

function gridOverlay(state = { show: false }, action) {
  switch(action.type) {
    case SHOW_GRID:
      return { show: action.show }
    default:
      return state;
  }
}


const stereoApp = combineReducers({
  gridOverlay,
  workModal,
  gallery,
  hamburgNavigation,
});

export default stereoApp;
