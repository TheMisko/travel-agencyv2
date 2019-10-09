import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Mapa = ({ height }) => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "1200px",
    height: "600px",
    zoom: 10
  });
  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/themisko/ck1hymggs1jl81cnpktd04685"
    ></ReactMapGl>
  );
};

export default Mapa;
