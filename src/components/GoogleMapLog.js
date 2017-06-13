import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import * as firebase from 'firebase'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class GoogleMapLog extends Component {
  constructor () {
    super()
    this.state = {
      map: null,
      zoom: null
    }
  }

  mapMoved () {
    console.log('uid ' + store.user.uid)
    const lat = this.state.map.getCenter().lat()
    const lng = this.state.map.getCenter().lng()
    const zoom = this.state.map.getZoom()
    firebase.database().ref('/users/' + store.user.uid + '/logs/' + store.date + '/location').update({ lat, lng, zoom })
  }

  mapLoaded (map) {
    if (this.state.map != null) { return }
    this.setState({
      map: map
    })
  }

  zoomChanged () {
    console.log('zoom has changed ' + this.state.map.getZoom())
    firebase.database().ref('/users/' + store.user.uid + '/logs/' + store.date + '/location/zoom').set(this.state.map.getZoom())
  }

  render () {
    const markers = this.props.markers || []
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        zoom={this.props.zoom}
        center={this.props.center}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(GoogleMapLog)
