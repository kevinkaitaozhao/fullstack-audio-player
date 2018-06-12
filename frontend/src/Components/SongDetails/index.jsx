import React, { Component } from 'react';

class SongDetails extends Component {
  render() {
    const { songs, playSong, match } = this.props

    let songId = match.params.songId

    return(
      <div>
        <h1>Song Details</h1>
        <h1>{songs[songId].title}</h1>
        <h1>{songs[songId].artist}</h1>
        <button onClick={() => { playSong(songs[songId].id) }}>Play</button>
      </div>
    )
  }
}

export default SongDetails;
