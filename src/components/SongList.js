import React from 'react'
import { connect } from 'react-redux'

class SongList extends React.Component {
    render() {
      console.log(this.props.songs);
      const songInfo = this.props.songs.map( (songInfo) => {

        return(
            <li key={songInfo.song} >{songInfo.artist} - {songInfo.song} - {songInfo.duration}</li>
        )
      })
      return(
        <div>
          <h2>Song List</h2>
          <ol>{songInfo}</ol>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
      return { songs: state.songs }
  }




export default connect(mapStateToProps) (SongList);
