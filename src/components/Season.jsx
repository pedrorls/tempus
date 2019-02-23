import React from 'react';

export default class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      error: null
    };
  }

  componentDidMount() {
    this.getPosition();
  }


  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }),
      err => this.setState({ error: err }),
<<<<<<< HEAD
    )
=======
    );
>>>>>>> master
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div>
        <h1>Your Current Position</h1>
        <p>
          Latitude: { lat }
        </p>
        <p>
          Longitude: { lon }
        </p>
      </div>
    );
  };
}
