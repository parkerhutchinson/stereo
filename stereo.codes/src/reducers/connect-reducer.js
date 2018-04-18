import { combineReducers } from 'redux';
import { musicStore } from '../store/connect-store';
import { 
  DECREMENT_MUSIC_SELECTION,
  INCREMENT_MUSIC_SELECTION
} from '../actions/connact-action';

const musicListLength = musicStore.length - 1;

const defaultState = musicStore[0];
defaultState.albumL = musicStore.length;
const music = (state = defaultState, action) => {
  const actionId = action.id;
  switch(action.type) {
    case INCREMENT_MUSIC_SELECTION:
      const nextArtist = actionId > musicListLength ? 0 : actionId;
      const musicNext = musicStore.filter((obj) => obj.id === nextArtist)[0];
      return Object.assign({}, state, musicNext);

    case DECREMENT_MUSIC_SELECTION:
      const prevArtist = actionId < 0 ? musicListLength : actionId;
      const musicPrev = musicStore.filter((obj) => obj.id === prevArtist)[0];
      return Object.assign({}, state, musicPrev);

    default:
      return state;
  }
}

const connect = combineReducers({
  music,
});

export default connect;