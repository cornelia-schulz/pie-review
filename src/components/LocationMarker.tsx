import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
// import cameraIcon from '../images/photo-camera.png'

function LocationMarker({
  id,
  info,
  info_title,
  label,
  lat,
  lng,
  title,
  type
}) {
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
    map.locate().on('locationfound', function (e) {
      const latlng = {
        lat: lat,
        lng: lng
      }
      setPosition(latlng)
    })
  }, [lat, lng, map])

  return position === null ? null : (
    // <Marker position={position} icon={cameraImageIcon}>
    <Marker position={position}>
      <Popup>
        <h2>{title}</h2>
        <h3>{info_title}</h3>
        <p>{info}</p>
      </Popup>
    </Marker>
  )
}

export default LocationMarker