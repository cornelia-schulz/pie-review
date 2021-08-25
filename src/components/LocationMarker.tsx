import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
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

interface IPosition {
  lat: number,
  lon: number
}

function LocationMarker(props:IProps) {
  const [position, setPosition] = useState<IPosition | null>(null)
  const L = require('leaflet')
  //let position = {lat:  30, lon: 50}
//   const cameraImageIcon = L.icon({
//     iconUrl: cameraIcon,
//     iconSize: [33,32],
//     iconAnchor: [0, 0],
//     popupAnchor: [16, 0],
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null
//   })
  const map = useMap()

  useEffect(() => {
    map.locate().on('locationfound', function (e:React.ChangeEvent) {
      const latlng = {
        lat: props.latitude,
        lon: props.longitude
      }
      setPosition(latlng)
    })
  }, [props.latitude, props.longitude, map])

  return position === null ? null : (
    // <Marker position={position} icon={cameraImageIcon}>
    <Marker position={position}>
      <Popup>
        {/* <h2>{title}</h2>
        <h3>{info_title}</h3>
        <p>{info}</p> */}
      </Popup>
    </Marker>
  )
}

export default LocationMarker