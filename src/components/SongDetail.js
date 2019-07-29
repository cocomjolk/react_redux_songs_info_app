import React from 'react'
import { connect } from 'react-redux'

const SongDetail = () => {

    return (
      <div>
        test
        {this.props.selectedSongReducer.song}
      </div>

    )

}

const mapStateToProps = (state) => {
  console.log('SongDetail state: ',state);
  return
}

export default connect(mapStateToProps, {})(SongDetail)
