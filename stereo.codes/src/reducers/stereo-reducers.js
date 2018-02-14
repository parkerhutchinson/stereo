import { combineReducers } from 'redux';
import { NAVIGATION_OPEN } from '../actions/navigation-actions';
import { GRID_ACTIVATE } from '../actions/grid-actions';
import { SECTION_ADD } from '../actions/observer-actions';
import { MODAL_OPEN } from '../actions/modal-actions';


function navigation(state = { open: false }, action) {
  switch(action.type) {
    case NAVIGATION_OPEN:
      return Object.assign({}, state, { open: action.open });
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

function grid(state = { activate: false }, action) {
  switch(action.type) {
    case GRID_ACTIVATE:
      return Object.assign({}, state, { activate: action.show });
    default:
      return state;
  }
}

function section(state = '', action) {
  switch(action.type) {
    case SECTION_ADD:
      return action.section
    default:
      return state;
  }
}

function modal(state = { MODAL_OPEN: false }, action) {
  switch(action.type) {
    case MODAL_OPEN:
      return Object.assign({}, state, { open: action.open });
    default:
      return state;
  }
}
const bgImages = [
  {
    label: 'test',
    image: './images/bg-work/lycoming-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lim-mobile.jpg',
  },
  {
    label: 'test',
    image: './images/bg-work/lycoming-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lim-mobile.jpg',
  },
]
function workImages(state = bgImages) {
  return state;
}

const stereoApp = combineReducers({
  workImages,
  modal,
  section,
  gallery,
  grid,
  navigation,
});

export default stereoApp;
