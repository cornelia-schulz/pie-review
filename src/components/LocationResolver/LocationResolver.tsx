import React, { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useLocationContext } from '../../hooks/useLocationContext';
import BoundsTracker from '../BoundsTracker/BoundsTracker';
import { IPosition } from '../../models/location';

function LocationResolver() {
  const [position, setPosition] = useState<IPosition | null>({lat: -43.5258654860019, lng: 172.61722095547762});
  const map = useMap();
  const locationContext = useLocationContext();
  
  useEffect(() => {
    if(locationContext && locationContext.position) {
      const latlng = {
        lat: locationContext.position.lat,
        lng: locationContext.position.lng
      }
      setPosition(latlng);
      map.flyTo(latlng, map.getZoom());
       
    }
  }, [map, locationContext.position]);

  function updateBounds() {
    let bounds = map.getBounds();
      if (bounds) {
        //debugger;
        locationContext.setBounds({
          _northEast: {lat: bounds._northEast.lat, lng: bounds._northEast.lng},
          _southWest: {lat: bounds._southWest.lat, lng: bounds._southWest.lng}
        });
      }
  }
  return position === null ? null : (
    <>
      <Marker position={position} />
      <BoundsTracker setBounds={updateBounds} />
    </>
    
  )
}

export default LocationResolver;