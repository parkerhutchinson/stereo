import { combineReducers } from 'redux';
import { SET_ACTIVE_PROJECT, CLOSE_ACTIVE_PROJECT } from '../actions/work-actions';

// TODO: maybe use airtable for this state
const projectList = [
  {
    id: 1,
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: '#DDF0EC',
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    id: 2,
    title: 'LIM Business of Fashion',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    na: true,
  },
  {
    id: 3,
    title: 'Lycoming',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
  },
]

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
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    label: 'test',
    image: './images/bg-work/lim-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lycoming-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lim-mobile.jpg',
  },
];

const project = (state = { show: false }, action) => {
  switch(action.type){
    case SET_ACTIVE_PROJECT:
      const project = projectList.filter((obj) => obj.id === action.id)[0];
      project['show'] =  true;
      return Object.assign({}, state, project);
    case CLOSE_ACTIVE_PROJECT:
      return Object.assign({}, state, { show: false });
    default:
      return state;
  }
}

const projects = (state = projectList) => {
  return state;
}

const workImages = (state = bgImages) => {
  return state;
}

const work = combineReducers({
  project,
  projects,
  workImages,
});

export default work;
