import React from 'react'
import videojs from 'video.js'
import 'videojs-flash'
import 'videojs-contrib-hls'
import 'videojs-contrib-quality-levels'
import 'videojs-resolution-switcher'
import '../node_modules/video.js/dist/video-js.css'
import './videojs-resolution-switcher.css'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(
      this.videoNode,
      {
        preload: true,
        autoplay: true,
        controls: true,
        muted: true,
        width: 600,
        plugins: {
          videoJsResolutionSwitcher: {
            ui: true,
            default: 'low', // Default resolution [{Number}, 'low', 'high'],
            dynamicLabel: true, // Display dynamic labels or gear symbol
          },
        },
      },
      function() {
        var player = this
        window.player = player
        player.updateSrc([
          {
            src: 'https://vjs.zencdn.net/v/oceans.mp4?sd',
            type: 'video/mp4',
            label: '360',
            res: 360,
          },
          {
            src: 'https://vjs.zencdn.net/v/oceans.mp4?hd',
            type: 'video/mp4',
            label: '720',
            res: 720,
          },
        ])

        
       
      },
    )

    this.player.ready(() => {
      this.player.currentTime(5)
      // this.player.pause()
      console.log(this.player.isFullscreen())
      console.log(this.player.currentResolution())
    })

  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className="video-js vjs-default-skin"
            data-setup="{ techOrder: ['flash'] }"
          />
        </div>
      </div>
    )
  }
}
