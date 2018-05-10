import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Player from './Player'

class App extends Component {
  render() {
    const videoJsOptions = {
      preload: true,
      autoplay: true,
      controls: true,
      muted: true,
      width: 600,
      plugins: {
        videoJsResolutionSwitcher: {
          ui: true,
          default: 720, // Default resolution [{Number}, 'low', 'high'],
          dynamicLabel: true, // Display dynamic labels or gear symbol
        },
      },
      // sources: [
      //   {
      //     // src: 'rtmp://172.17.34.51:1935/channel/1?key=VFW1at2wmMJMGottrOirz2khOck72w4eJHL4PRDjx5bAKi0XGq-fiylwpKWAxmvGxgN2_ILJfrJTqO9mUUGfYf8K0Ve9_Jrt67Lql-nMyB5VlyCr-XgQOBrHsVmTCH_4Gu039FYIEepdCSmWmNyS29JEnG8ep08pBBw082HOOlI',
      //     // type: 'rtmp/mp4'
      //     src:'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
      //     type: 'application/x-mpegURL',
      //     // src: 'http://vjs.zencdn.net/v/oceans.mp4',
      //     // type: 'video/mp4',
      //     // label: '720P',
      //     // selected: true,
      //   },
      //   //   {
      //   //     src: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
      //   //     type: 'application/x-mpegURL',
      //   //     // src: 'https://example.com/video_480.mp4',
      //   //     // type: 'video/mp4',
      //   //     label: '480P',

      //   //  },
      // ],
      controlBar: {
        children: [
          'playToggle',
          'progressControl',
          'volumePanel',
          'qualitySelector',
          'fullscreenToggle',
        ],
      },
    }

    return (
      <div className="App">
        <Player {...videoJsOptions} />
      </div>
    )
  }
}

export default App
