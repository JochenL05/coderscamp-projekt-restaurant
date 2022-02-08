import React from "react";
import GoogleMapReact from "google-map-react";
import "./googleMap.css";
// import API_KEY from "./apikey";

const Marker = () => {
  return <div className="pin"></div>;
};

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 52.408708,
      lng: 16.934972,
    },
    zoom: 11,
  };
  return (
    <div className="googleMap" style={{ width: "50%", height: "50vh" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
