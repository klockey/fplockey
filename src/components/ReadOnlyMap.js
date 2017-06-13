import React, { Component } from 'react'
import { GoogleMap, withGoogleMap } from 'react-google-maps'

const Map = withGoogleMap(({ center, zoom }) => {
  return <GoogleMap
    defaultCenter={center}
    defaultZoom={zoom}
  />
})

class ReadOnlyMap extends Component {
  render () {
    return <Map
      containerElement={<div style={{ pointerEvents: 'none', height: '300px' }} />}
      mapElement={<div style={{ height: '300px' }} />}
      {...this.props}
    />
  }
}

export default ReadOnlyMap
