import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
  console.log(props);
  let song = props.song
  if (song === null) {
    return (
      <div>
        Please select a song
      </div>
    )
  } else {
    return (
      <div>
        <h2>
          Artist: {song.artist}
        </h2>
        Name: {song.song}
          <br/>
        Duration: {song.duration}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('SongDetail state: ',state);
  return { song: state.selectedSongReducer }
}

export default connect(mapStateToProps)(SongDetail)
