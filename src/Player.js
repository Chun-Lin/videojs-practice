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
      this.props,
      // {
      //   preload: true,
      //   autoplay: true,
      //   controls: true,
      //   muted: true,
      //   width: 600,
      //   plugins: {
      //     videoJsResolutionSwitcher: {
      //       ui: true,
      //       default: 'low', // Default resolution [{Number}, 'low', 'high'],
      //       dynamicLabel: true, // Display dynamic labels or gear symbol
      //     },
      //   },
      // },
      function() {
        var player = this
        window.player = player
        player.updateSrc([
          {
            src: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
            type: 'application/x-mpegURL',
            label: '360',
            res: 360,
          },
          {
            src: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
            type: 'application/x-mpegURL',
            label: '720',
            res: 720,
          },
          {
            src: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
            type: 'application/x-mpegURL',
            label: '1080',
            res: 1080,
          },
        ])
      },
    )

    let qualityLevels = this.player.qualityLevels()
    // // console.log(qualityLevels)
    // // disable quality levels with less than 720 horizontal lines of resolution when added
    // // to the list.
    // qualityLevels.on('addqualitylevel', function(event) {
    //   let qualityLevel = event.qualityLevel
    //   console.log(qualityLevel)
    //   if (qualityLevel.height >= 720) {
    //     qualityLevel.enabled = true
    //   } else {
    //     qualityLevel.enabled = false
    //   }
    // })

    // example function that will toggle quality levels between SD and HD, defining and HD
    // quality as having 720 horizontal lines of resolution or more
    let toggleQuality = (function() {
      let enable720 = true

      return function() {
        for (var i = 0; i < qualityLevels.length; i++) {
          let qualityLevel = qualityLevels[i]
          if (qualityLevel.width >= 720) {
            qualityLevel.enabled = enable720
          } else {
            qualityLevel.enabled = enable720
          }
        }
        enable720 = !enable720
      }
    })()

    toggleQuality()
    let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex
    console.log(currentSelectedQualityLevelIndex) // -1 if no level selected
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
