import React from 'react'
import videojs from 'video.js'
import 'videojs-flash'
import 'videojs-contrib-hls'
import 'videojs-contrib-quality-levels'
import '../node_modules/video.js/dist/video-js.css'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })

    // let qualityLevels = this.player.qualityLevels()

    // // disable quality levels with less than 720 horizontal lines of resolution when added
    // // to the list.
    // qualityLevels.on('addqualitylevel', function(event) {
    //   let qualityLevel = event.qualityLevel

    //   if (qualityLevel.height >= 720) {
    //     qualityLevel.enabled = true
    //   } else {
    //     qualityLevel.enabled = false
    //   }
    // })

    // // example function that will toggle quality levels between SD and HD, defining and HD
    // // quality as having 720 horizontal lines of resolution or more
    // let toggleQuality = (function() {
    //   let enable720 = true

    //   return function() {
    //     for (var i = 0; i < qualityLevels.length; i++) {
    //       let qualityLevel = qualityLevels[i]
    //       if (qualityLevel.width >= 720) {
    //         qualityLevel.enabled = enable720
    //       } else {
    //         qualityLevel.enabled = !enable720
    //       }
    //     }
    //     enable720 = !enable720
    //   }
    // })()

    // let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex // -1 if no level selected
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
            className="video-js"
            data-setup="{ techOrder: ['flash'] }"
          />
        </div>
      </div>
    )
  }
}
