import React from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const Map = withScriptjs(withGoogleMap((props) => {
    const lat = props.lat;
    const lng = props.lng;

    return (
        <GoogleMap
            defaultZoom={6}
            center={{ lat: lat, lng: lng }}
            ref={map => map && map.panTo({ lat: lat, lng: lng })}
        >
            {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
        </GoogleMap>
    );
}
));