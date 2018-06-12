import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongList extends Component {

  render() {
    const { songs, playSong } = this.props

    const songsJSX = songs.map((song, i) => {
      return (
        <div key={i}>
          <Link to={`/${song.id}`}>
            <h1>{song.title}</h1>
          </Link>
          <button onClick={() => { playSong(song.id) }}>Play</button>
        </div>
      )
    })

    return (
      <div>
        <h1>Song List</h1>
        {songsJSX}
      </div>
    )
  }
}

export default SongList;
