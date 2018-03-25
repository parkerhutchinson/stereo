import { combineReducers } from 'redux';
import {
  SET_ACTIVE_PROJECT,
  CLOSE_ACTIVE_PROJECT,
  SET_ESCAPE_CODE,
} from '../actions/work-actions';

// TODO: maybe use airtable for this state
const projectList = [
  {
    id: 1,
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: '#DDF0EC',
    image: './images/bg-work/draftboard-mobile.jpg',
    copy: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p>',
  },
  {
    id: 2,
    title: 'LIM Business of Fashion',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: '#BEE0FA',
    image: './images/bg-work/lim-mobile.jpg',
    copy: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p>',
  },
  {
    id: 3,
    title: 'Lycoming',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: '#FDE6E6',
    image: './images/bg-work/lycoming-mobile.jpg',
    copy: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p>',
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
const initialEscapeWatcher = {
  code: 0,
}

const project = (state = { show: false, from: 'row' }, action) => {
  switch(action.type){
    // case SET_ACTIVE_PROJECT_FROM:
    //   return Object.assign({}, state, { from: action.from });
    case SET_ACTIVE_PROJECT:
      const project = projectList.filter((obj) => obj.id === action.id)[0];
      project['show'] = true;
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

// I bet this would be easier with RX or state machine thing.
const escapeWatcher = (state = initialEscapeWatcher, action) => {
  switch(action.type){
    case SET_ESCAPE_CODE:
      return Object.assign({}, state, action.code);
    default:
      return state;
  }
}

const work = combineReducers({
  project,
  projects,
  workImages,
  escapeWatcher,
});

export default work;
