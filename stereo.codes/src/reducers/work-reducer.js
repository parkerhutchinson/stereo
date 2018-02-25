import { combineReducers } from 'redux';
import { SET_ACTIVE_PROJECT, CLOSE_ACTIVE_PROJECT } from '../actions/work-actions';

// TODO: maybe use airtable for this state
const portfolioList = [
  {
    id: 1,
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
  },
  {
    id: 2,
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    na: true,
  },
  {
    id: 3,
    title: 'draftboard three',
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

const project = (state = { id: 0, show: false }, action) => {
  switch(action.type){
    case SET_ACTIVE_PROJECT:
      return Object.assign({}, state, { id: action.id, show: true });
    case CLOSE_ACTIVE_PROJECT:
      return Object.assign({}, state, { show: false });
    default:
      return state;
  }
}

const portfolio = (state = portfolioList) => {
  return state;
}

const workImages = (state = bgImages) => {
  return state;
}

const work = combineReducers({
  project,
  portfolio,
  workImages,
});

export default work;
