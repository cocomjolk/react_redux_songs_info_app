import React from 'react'
import { connect } from 'react-redux'
//need curly braces because its a named export
//in actions file
import { selectSong } from '../actions'

class SongList extends React.Component {
    renderList() {
      return this.props.songs.map( (songs) => {
        return(
          <div className="item" key={songs.song}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => this.props.selectSong(songs) }
              >
                Select
              </button>
            </div>

            <div className="content">{songs.song}</div>
          </div>
        )
      })
    }

    render() {
      // console.log(this.props);

      return(
        <div className="ui divided list">
          <h2>Song List</h2>
          {this.renderList()}
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    // console.log(state);
      return { songs: state.songs }
  }

//the connect function is going to take that selectSong
//action creator and pass it to our component as a prop.
//The selectSong key value is action being imported
//from the actions index.js file.
export default connect(mapStateToProps, {
  selectSong: selectSong
}) (SongList);
