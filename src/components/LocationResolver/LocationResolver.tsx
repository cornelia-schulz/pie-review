import { LatLngTuple } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import { useLocationContext } from '../../hooks/useLocationContext'
import BoundsTracker from '../BoundsTracker/BoundsTracker'
import pin from '../../assets/pin.png'

function LocationResolver() {
  const [position, setPosition] = useState<LatLngTuple | null>([
    -43.5258654860019,
    172.61722095547762,
  ])
  const map = useMap()
  const locationContext = useLocationContext()

  const L = require('leaflet')
  const markerIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [1, 1]
  })

  useEffect(() => {
    if (locationContext && locationContext.position) {
      const latlng: LatLngTuple = [
        locationContext.position.lat,
        locationContext.position.lng,
      ]
      setPosition(latlng)
      map.flyTo(latlng, map.getZoom())
    }
  }, [map, locationContext.position])

  function updateBounds() {
    let bounds = map.getBounds()
    if (bounds) {
      const NE = bounds.getNorthEast()
      const SW = bounds.getSouthWest()

      locationContext.setBounds({
        _northEast: { lat: NE.lat, lng: NE.lng },
        _southWest: { lat: SW.lat, lng: SW.lng },
      })
    }
  }
  return position === null ? null : (
    <>
      <Marker position={position} icon={markerIcon} />
      <BoundsTracker setBounds={updateBounds} />
    </>
  )
}

export default LocationResolver
