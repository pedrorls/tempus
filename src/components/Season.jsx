import React from 'react';

import SeasonDisplay from './SeasonDisplay';

export default class Season extends React.Component {
  state = {
    lat: null,
    lon: null,
    errorMsg: ''
  };

  componentDidMount() {
    this.getPosition();
  }

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }),
      err => this.setState({ errorMsg: err.message }),
    )
  }

  render() {
    const { lat, lon, errorMsg } = this.state;
    return (
      <div>
        <h1>Your Current Position</h1>
        <p>
          Latitude: { lat }
        </p>
        <p>
          Longitude: { lon }
        </p>
        <p>
          Error: { errorMsg }
        </p>
        <SeasonDisplay lat={lat} />
      </div>
    );
  }
}
