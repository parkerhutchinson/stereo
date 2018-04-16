export const DECREMENT_MUSIC_SELECTION = 'DECREMENT_MUSIC_SELECTION';
export const INCREMENT_MUSIC_SELECTION = 'INCREMENT_MUSIC_SELECTION';

export const getNextMusicSelection = (id) => {
  return {
    type: 'INCREMENT_MUSIC_SELECTION',
    id,
  }
}

export const getPrevMusicSelection = (id) => {
  return {
    type: 'DECREMENT_MUSIC_SELECTION',
    id,
  }
}