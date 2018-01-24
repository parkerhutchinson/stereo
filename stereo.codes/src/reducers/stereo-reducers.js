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

function gallery() {
  const galleryImages = [
    {image: 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG'},
    {image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-0.3.5&s=d5b622e2ea747f0eaa17e73a2040031a'},
    {image: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&w=3150&q=80'},
    {image: 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG'},
    {image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-0.3.5&s=d5b622e2ea747f0eaa17e73a2040031a'},
    {image: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&w=3150&q=80'},
    {image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-0.3.5&s=872a83ba6a07ac43b3e7176337665316&auto=format&fit=crop&w=2850&q=80'},
  ]
  return galleryImages;
}

const stereoApp = combineReducers({
  gallery,
  hamburgNavigation,
});

export default stereoApp;
