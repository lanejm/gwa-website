import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class Location extends Component {
  state = {
    showingInfoWindow: true, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 39.87041873958882, lng: -86.12878794390897 }}
      >
        <Marker
          position={{ lat: 39.87041873958882, lng: -86.12878794390897 }}
          name={"Glendale Woods Apartments"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=process.env.REACT_APP_API_KEY&callback=initMap"
type="text/javascript"></script>

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Location);
