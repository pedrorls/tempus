import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    if (!lat && errorMsg) {
      return <p>Error: {errorMsg}</p>
    }

    if(lat && !errorMsg) {
      return <SeasonDisplay lat={lat} />
    }
    
    return <Spinner message="Please, accept location request." />;
  }
}
