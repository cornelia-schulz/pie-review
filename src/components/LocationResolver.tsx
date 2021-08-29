import React, { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useLocationContext } from '../hooks/useLocationContext';
import { IPosition } from '../models/location';

function LocationResolver() {
  const [position, setPosition] = useState<IPosition | null>({lat: -43.5258654860019, lon: 172.61722095547762});
  const map = useMap();
  const location = useLocationContext();
  
  useEffect(() => {
    map.locate().on('locationfound', function (e:React.ChangeEvent) {
      if (location && location.position) {
        const latlng = {
          lat: location.position.lat,
          lon: location.position.lon
        }
        setPosition(latlng);
        map.flyTo(latlng, map.getZoom());
      }
    })
  }, [map, location, location.position])

  return position === null ? null : (
    <Marker position={position} />
  )
}

export default LocationResolver;