import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
require("dotenv").config();

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 39.87041873958882,
  lng: -86.12878794390897,
};

function Location() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Location);

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false, // Hides or shows the InfoWindow
//     activeMarker: {}, // Shows the active marker upon click
//     selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onClose = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{ lat: 39.87041873958882, lng: -86.12878794390897 }}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           name={"Glendale Woods Apartments"}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE,
// })(MapContainer);
