import { combineReducers } from 'redux';
import { musicStore } from '../store/connect-store';
import { 
  DECREMENT_MUSIC_SELECTION,
  INCREMENT_MUSIC_SELECTION
} from '../actions/connact-action';


const music = (state = musicStore, action) => {
  switch(action.type) {
    case INCREMENT_MUSIC_SELECTION:
      console.log('increment music');
      break;
    case DECREMENT_MUSIC_SELECTION:
      console.log('decrement music');
      break;
    default:
      return state;
  }
}

const connect = combineReducers({
  music,
});

export default connect;