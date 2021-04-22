//map feature
import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import * as mapData from "./amazing-spots.json";

//zoom set to 8, able to see Co.Galway and the west coastline of Ireland
function GMap(){
    return(
    <GoogleMap defaultZoom={8} defaultCenter={{lat: 53.270668, lng: -9.056790}}>
   
    </GoogleMap>);
}
//wrap a few layers around the map
const WrapMap =withScriptjs(withGoogleMap(GMap));

export class Map extends React.Component{
  
    render(){
        return(
            <div style={{width: '100vw', height: '100vh'}}>
                <WrapMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtkFjPRB2tu9ob1CSuT9qd__zVGa_dwHI"
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
                />
            </div>
        );
    }
}