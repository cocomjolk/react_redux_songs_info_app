// Action Creator

export const selectSong = (song) => {
  // Create Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
