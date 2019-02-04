import React, { Component } from 'react';

import {withGoogleMap, GoogleMap } from "react-google-maps"

const MyMapComponent = withGoogleMap((props) =>
  <GoogleMap
    // Set Zoom of map
    defaultZoom={12}
    // Pass lat & lon of city searched
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  >
  </GoogleMap>
)

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        lat={this.props.lat}
        lon={this.props.lon}
        googleMapURL={this.props.ga}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default Map;