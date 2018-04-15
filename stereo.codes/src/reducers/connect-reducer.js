import { combineReducers } from 'redux';
import { musicStore } from '../store/connect-store';

const music = (state = musicStore) => {
  return state;
}

const connect = combineReducers({
  music,
})

export default connect;