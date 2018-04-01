import { combineReducers } from 'redux';
import {
  SET_ACTIVE_PROJECT,
  CLOSE_ACTIVE_PROJECT,
  SET_ESCAPE_CODE,
  INCREMENT_ACTIVE_PROJECT,
  DECREMENT_ACTIVE_PROJECT
} from '../actions/work-actions';

// TODO: maybe use airtable for this state
const projectList = [
  {
    id: 0,
    title: 'Draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: 'dark',
    image: './images/bg-work/draftboard-mobile.jpg',
    link: 'https://draftboard.com',
    copy: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p>',
  },
  {
    id: 1,
    title: 'LIM Business of Fashion',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: 'light',
    link: 'https://limcollege.edu',
    image: './images/bg-work/lim-mobile.jpg',
    copy: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id voluptate harum maiores tenetur distinctio doloremque, in sequi repellat deleniti earum? Alias quod fugit vitae dignissimos aut, expedita quae iste.</p>',
  },
  {
    id: 2,
    title: 'Lycoming',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    color: 'dark',
    link: 'http://www.lycoming.com',
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

const project = (state = { show: false }, action) => {
  let actionID = action.id;
  const projectL = projectList.length - 1;

  switch(action.type){
    case SET_ACTIVE_PROJECT:
      const project = projectList.filter((obj) => obj.id === actionID)[0];
      project['show'] = true;
      return Object.assign({}, state, project);

    case CLOSE_ACTIVE_PROJECT:
      return Object.assign({}, state, { show: false });

    case INCREMENT_ACTIVE_PROJECT:
      const nextProjectID = action.id < projectL ? actionID += 1 : 0;
      const projectNext = projectList.filter((obj) => obj.id === nextProjectID)[0];
      projectNext['show'] = true;
      return Object.assign({}, state, projectNext);

    case DECREMENT_ACTIVE_PROJECT:
      const prevProjectID = action.id > 0 ? actionID -= 1 : projectL;
      const projectPrev = projectList.filter((obj) => obj.id === prevProjectID)[0];
      projectPrev['show'] = true;
      return Object.assign({}, state, projectPrev);

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
