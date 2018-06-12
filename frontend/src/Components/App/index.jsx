import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'

import SongList from '../SongList/'
import SongDetails from '../SongDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      songIndex: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((response) => {
        this.setState({
          songs: response.data,
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  start = () => {
    this.songPlayer.play()
  }

  pause = () => {
    this.songPlayer.pause()
  }

  changeSong = () => {
    const { songs, songIndex } = this.state

    if (songIndex < songs.length - 1) {
      this.setState({
        songIndex: songIndex + 1
      })
    } else {
      this.setState({
        songIndex: songIndex - 1
      })
    }

    if (this.songPlayer.paused) {
      this.songPlayer.load()
    } else {
      this.songPlayer.load()
      this.songPlayer.play()
    }
  }

  playSong = (song) => {
    this.setState({
      songIndex: song
    })
    this.songPlayer.load()
    this.songPlayer.play()
  }

  render() {
    const { songs, songIndex } = this.state

    if (songs.length < 1){
      return (
      <p> Loading... </p>
    )}
    
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={routerProps => <SongList
                {...routerProps}
                songs={songs}
                playSong={this.playSong}
              />}
            />
            <Route
              exact path="/:songId"
              render={routerProps => <SongDetails
                {...routerProps}
                songs={songs}
                playSong={this.playSong}
              />}
            />
          </Switch>
        </Router>
        <div>
          <h1>{songs[songIndex].title}</h1>
          <audio ref={(self) => this.songPlayer = self}>
            <source src={songs[songIndex].url} type="audio/mpeg" />
          </audio>
          <button onClick={this.changeSong}>Previous</button>
          <button onClick={this.start}>Start</button>
          <button onClick={this.pause}>Pause</button>
          <button onClick={this.changeSong}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
