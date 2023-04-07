import React from "react";
import KeplerGl from "kepler.gl";
import {ReactReduxContext} from "react-redux";

const Map = () => {
  return (
    <ReactReduxContext.Consumer>
      {({store}) => (
        <KeplerGl
          id="map"
          width={window.innerWidth}
          mapboxApiAccessToken={"put your token"}
          height={window.innerHeight}
          store={store}
        />
      )}
    </ReactReduxContext.Consumer>
  );
};

export default Map;
