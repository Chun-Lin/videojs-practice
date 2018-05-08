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
        src: 'rtmp://172.17.34.51:1935/channel/1?key=VFW1at2wmMJMGottrOirz2khOck72w4eJHL4PRDjx5bAKi0XGq-fiylwpKWAxmvGxgN2_ILJfrJTqO9mUUGfYf8K0Ve9_Jrt67Lql-nMyB5VlyCr-XgQOBrHsVmTCH_4Gu039FYIEepdCSmWmNyS29JEnG8ep08pBBw082HOOlI',
        type: 'rtmp/mp4'
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
