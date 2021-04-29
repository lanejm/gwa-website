import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 40.0, lng: -86.0 }],
    };
  }

  displayMarker = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: 39.87041873958882,
            lng: -86.12878794390897
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 39.87041873958882, lng: -86.12878794390897 }}
      >
        {this.displayMarker()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
  
})(Location);
