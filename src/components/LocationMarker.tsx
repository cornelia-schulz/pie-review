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

function LocationMarker(props:IProps) {
  const [position, setPosition] = useState(null)
  const L = require('leaflet')
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
        lng: props.longitude
      }
      setPosition(latlng)
    })
  }, [props.latitude, props.latitude, map])

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