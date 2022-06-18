import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { IPosition } from '../../models/location';
// import cameraIcon from '../images/photo-camera.png'

interface IProps {
  id: number,
  name: string,
  street: string,
  city: string,
  county: string,
  country: string,
  longitude: number,
  latitude: number
}

function LocationMarker(props:IProps) {
  const [position, setPosition] = useState<IPosition | null>(null);
  const pos = [props.latitude, props.longitude]
  // const L = require('leaflet');
  //let position = {lat:  30, lng: 50}
//   const cameraImageIcon = L.icon({
//     iconUrl: cameraIcon,
//     iconSize: [33,32],
//     iconAnchor: [0, 0],
//     popupAnchor: [16, 0],
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null
//   })
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e:React.ChangeEvent) {
      const latlng = {
        lat: props.latitude,
        lng: props.longitude
      }
      setPosition(latlng)
    })
    console.log('marker', props.name, props.latitude, props.longitude)
  }, [props.latitude, props.longitude, map])

  return position === null ? null : (
    // <Marker position={position} icon={cameraImageIcon}>
    <Marker position={pos}>
      <Popup>
        <h2>{props.name}</h2>
        <h3>{props.street}</h3>
        <p>{props.city}</p>
      </Popup>
    </Marker>
  )
}

export default LocationMarker;