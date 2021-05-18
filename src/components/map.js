//map feature
import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
import * as mapData from "./amazing-spots.json";
import fire from "./fire";

//AIzaSyDtkFjPRB2tu9ob1CSuT9qd__zVGa_dwHI

// https://www.npmjs.com/package/@react-google-maps/api


function Map(){
	const { isLoaded } = useJsApiLoader({
		id: 'steady-bonsai-302516',
		googleMapsApiKey: 'AIzaSyDtkFjPRB2tu9ob1CSuT9qd__zVGa_dwHI'
	})

	const [map, setMap] = useState(null)

	const [markers, setMarkers] = useState( null )
	const [line, setLine] = useState( null )

	const onLoad = useCallback((map) => {
		const bounds = new window.google.maps.LatLngBounds();

		map.fitBounds( bounds );

		setMap(map);

		fire.database().ref("pinpoints").get().then( (data) => {
			let markers = []
			// let path = []

			data.forEach(entry => {
				let row = entry.val();

				// path.push( {
				// 	lat: row.x,
				// 	lng: row.y
				// })

				markers.push(
					<Marker position={{ lat: row.x, lng: row.y }} title={row.name}> 
					</Marker>
				)
			});

			setMarkers( markers );
			// setLine( <Polyline path={path}> </Polyline> );
		});
	})

	return isLoaded ? (
	<GoogleMap center={{ lat: 53.273223774048894, lng: -9.049334849871427 }} mapContainerStyle={{width: '500px', height: '500px', margin: "auto"}} zoom={8} onLoad={onLoad}>
		{ markers }
		{ line }
	</GoogleMap>
	) : <div>Loading :(</div>
}

export default React.memo( Map );



// //zoom set to 8, able to see Co.Galway and the west coastline of Ireland
// function GMap(){
//     return(
//     <GoogleMap defaultZoom={8} defaultCenter={{lat: 53.270668, lng: -9.056790}}>
// 		<Marker position={{lat: 53.27570968813019, long: -9.02352757346543}}/>


//     </GoogleMap>);
// }
// //wrap a few layers around the map
// const WrapMap =withScriptjs(withGoogleMap(GMap));

// export class Map extends React.Component{
  
//     render(){
//         return(
//             <div style={{width: '100vw', height: '100vh'}}>
//                 <WrapMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
//                 loadingElement={<div style={{height: "100%"}}/>}
//                 containerElement={<div style={{height: "100%"}}/>}
//                 mapElement={<div style={{height: "100%"}}/>}
//                 />
//             </div>
//         );
//     }
// }