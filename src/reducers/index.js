import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { artist: 'Foo Fighters',  song: 'Everlong', duration: '3:50'},
    { artist: 'Decendents',  song: 'Hope', duration: '2:50'},
    { artist: 'Metallica',  song: 'One', duration: '6:50'},
    { artist: 'Misfits',  song: 'Last Caress', duration: '1:50'},
  ]
};


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
      return action.payload;
  } else {
      return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSongReducer: selectedSongReducer

})
