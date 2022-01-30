import GoogleMapReact from "google-map-react";
import { Component } from "react";
import "./googleMap.css";
import API_KEY from "../../../apikey";

const MyMap = ({ Restauracja }) => <div className="googleMap">{Restauracja}</div>;
const Marker = (props) => {
  return <div className="googlePin"></div>;
};

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 52.408708,
      lng: 16.934972,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="googleMap" style={{ width: "50%", height: "50vh" }}>
        <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <MyMap lat={52.408708} lng={16.934972} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
