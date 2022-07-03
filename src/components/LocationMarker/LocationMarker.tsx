import { LeafletEvent, LatLngTuple } from 'leaflet'
import { useEffect, useState, useRef, RefAttributes } from 'react'
import { Marker, PopupProps, useMap } from 'react-leaflet'
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
  isActive: boolean
  map: any
}

function LocationMarker(props: IProps) {
  const [position, setPosition] = useState<LatLngTuple | null>(null)
  const L = require('leaflet')
  const markerIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [45, 44]
  })
  const map = useMap()
  const [refReady, setRefReady] = useState(false)
  let popupRef = useRef<Popup>(null)

  useEffect(() => {
    map.locate().on('locationfound', function (e: LeafletEvent) {
      const latlng: LatLngTuple = [props.latitude, props.longitude]
      setPosition(latlng)
      if (refReady && props.isActive) {
        popupRef.openOn(map)
      }
    })
  }, [props.latitude, props.longitude, map])

  return position === null ? null : (
    <Marker position={position} icon={markerIcon} >
      <Popup
        ref={(r) => {
          popupRef.current = r
          setRefReady(true)
        }}
      >
        <h4>{props.name}</h4>
        <h5>{props.street}</h5>
        <p>{props.city}</p>
      </Popup>
    </Marker>
  )
}

export default LocationMarker
