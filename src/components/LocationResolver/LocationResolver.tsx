import React, { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useLocationContext } from '../../hooks/useLocationContext';
import { IPosition } from '../../models/location';

function LocationResolver() {
  const [position, setPosition] = useState<IPosition | null>({lat: -43.5258654860019, lng: 172.61722095547762});
  const map = useMap();
  const locationContext = useLocationContext();
  
  useEffect(() => {
    map.locate().on('locationfound', function (e:React.ChangeEvent) {
      if (locationContext && locationContext.position) {
        const latlng = {
          lat: locationContext.position.lat,
          lng: locationContext.position.lng
        }
        locationContext.setBounds = map.getBounds();
        setPosition(latlng);
        map.flyTo(latlng, map.getZoom());
      }
    })
  }, [map, locationContext, locationContext.position])

  return position === null ? null : (
    <Marker position={position} />
  )
}

export default LocationResolver;