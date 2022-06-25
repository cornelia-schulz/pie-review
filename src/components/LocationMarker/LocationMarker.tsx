import { LeafletEvent, LatLngTuple } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import pin from '../../assets/pie_pin.png'

interface IProps {
  id: number
  name: string
  street: string
  city: string
  county: string
  country: string
  longitude: number
  latitude: number
}

function LocationMarker(props: IProps) {
  const [position, setPosition] = useState<LatLngTuple | null>(null)
  const L = require('leaflet')
  const markerIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [45, 44]
  })
  const map = useMap()

  useEffect(() => {
    map.locate().on('locationfound', function (e: LeafletEvent) {
      const latlng: LatLngTuple = [props.latitude, props.longitude]
      setPosition(latlng)
    })
  }, [props.latitude, props.longitude, map])

  return position === null ? null : (
    <Marker position={position} icon={markerIcon} >
      <Popup>
        <h4>{props.name}</h4>
        <h5>{props.street}</h5>
        <p>{props.city}</p>
      </Popup>
    </Marker>
  )
}

export default LocationMarker
