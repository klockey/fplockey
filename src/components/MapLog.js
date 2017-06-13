import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class MapLog extends Component {
  componentWillMount () {
    console.log(store.user.uid + ' maplog')
  }

  render () {
    return <div className='centerMap'> <GoogleMapLog
      //  center={{lat: -25.363882, lng: 131.044922}}
      //  zoom={3}
      center={{lat: this.props.center.lat, lng: this.props.center.lng}}
      zoom={this.props.zoom}
      containerElement={<div />}
  //    mapElement={<div />} />
      mapElement={<div style={{height: 60 + '%', width: 100 + '%'}} />} />
      {/* mapElement={<div style={{height: 400 + 'px', width: 400 + 'px'}} />} /> */}
    </div>
  }
}

export default MapLog
