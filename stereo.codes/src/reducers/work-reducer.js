import { combineReducers } from 'redux';
import { bgImages, projectList } from '../store/work-store';
import {
  SET_ACTIVE_PROJECT,
  CLOSE_ACTIVE_PROJECT,
  SET_ESCAPE_CODE,
  INCREMENT_ACTIVE_PROJECT,
  DECREMENT_ACTIVE_PROJECT
} from '../actions/work-actions';

const initialEscapeWatcher = {
  code: 0,
}

const yingyang = {
  tof: true,
}

const project = (state = { show: false }, action) => {
  const actionID = action.id;
  const availableProjects = projectList.filter((obj) => !obj.na || obj.na === undefined);
  const availableProjectL = availableProjects.length - 1;
  const yoyo = yingyang.tof ? false : true;

  switch(action.type){
    case SET_ACTIVE_PROJECT:
      const project = projectList.filter((obj) => obj.id === actionID)[0];
      yingyang.tof = yoyo;
      project['light'] = yoyo;
      project['show'] = true;
      return Object.assign({}, state, project);

    case CLOSE_ACTIVE_PROJECT:
      return Object.assign({}, state, { show: false });

    case INCREMENT_ACTIVE_PROJECT:
      const nextProjectIndex = availableProjects.findIndex((obj) => obj.id === actionID) + 1;
      const nextProjectID = nextProjectIndex <= availableProjectL ? availableProjects[nextProjectIndex].id : availableProjects[0].id;
      const projectNext = availableProjects.filter((obj) => obj.id === nextProjectID)[0];
      yingyang.tof = yoyo;
      projectNext['light'] = yoyo;
      projectNext['show'] = true;
      return Object.assign({}, state, projectNext);

    case DECREMENT_ACTIVE_PROJECT:
      const prevProjectIndex = availableProjects.findIndex((obj) => obj.id === actionID) - 1;
      const prevProjectID = prevProjectIndex >= 0 ? availableProjects[prevProjectIndex].id : availableProjects[availableProjectL].id;
      const projectPrev = availableProjects.filter((obj) => obj.id === prevProjectID)[0];
      yingyang.tof = yoyo;
      projectPrev['light'] = yoyo;
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
