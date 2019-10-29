import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Mapa = ({ koordinate }) => {
  // const token = process.env.REACT_APP_MAPBOX_TOKEN;
  // const token = process.env.MAP_TOKEN;
  const token =
    "pk.eyJ1IjoidGhlbWlza28iLCJhIjoiY2sxaHh5aTM5MDBwazNkbW5zcGZ2emJ1aCJ9.IxF9Bk89byq_yOvqK6sBDA";
  const [viewport, setViewport] = useState({
    latitude: koordinate.first,
    longitude: koordinate.second,
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
