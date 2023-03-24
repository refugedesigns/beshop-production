import React, { useState } from "react";
import { Box } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl, GeolocateControl,FullscreenControl } from "react-map-gl";

const Location = () => {
  const [viewState, setViewState] = useState({
    lng: -0.1244027,
    lat: 5.6391942,
  });
  return (
    <Box className="h-[500px]">
      <Map
        style={{
          width: "100%",
          height: "100%",
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_KEY}
        initialViewState={{
          longitude: viewState.lng,
          latitude: viewState.lat,
          zoom: 10
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={viewState.lng} latitude={viewState.lat} />
        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </Box>
  );
};

export default Location;
