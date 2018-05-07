import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Player from './Player'

class App extends Component {
  render() {

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
        type: 'application/x-mpegURL'
      }]
    }

    return (
      <div className="App">
        <Player {...videoJsOptions}/>
      </div>
    )
  }
}

export default App
