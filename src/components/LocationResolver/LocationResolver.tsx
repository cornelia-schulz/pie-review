import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useLocationContext } from '../../hooks/useLocationContext';

import { IBounds, IPosition } from '../../models/location';

function LocationResolver() {
  const [position, setPosition] = useState<IPosition | null>({lat: -43.5258654860019, lng: 172.61722095547762});
  const map = useMap();
  const locationContext = useLocationContext();
  const [bounds, setBounds] = useState<IBounds | null>(map.getBounds());
  
  useEffect(() => {

    console.log('resolver 1:', locationContext)
    if(locationContext && locationContext.position) {
      const latlng = {
        lat: locationContext.position.lat,
        lng: locationContext.position.lng
      }
      setPosition(latlng);
      map.flyTo(latlng, map.getZoom());
      setBounds(map.getBounds());
      
    
      // map.on('dragend', function() {
      //   setBounds(map.getBounds());
      //   console.log('moveend')
      //   if (bounds) {
      //     locationContext.setBounds({
      //       _northEast: {lat: bounds._northEast.lat, lng: bounds._northEast.lng},
      //       _southWest: {lat: bounds._southWest.lat, lng: bounds._southWest.lng}
      //     });
      //     console.log('resolver 2', locationContext.bounds, bounds)
      //   }
      // });

      
      
      // debugger;
      
    }
    
  }, [map, locationContext, locationContext.position]);


  return position === null ? null : (
    <Marker position={position} />
  )
}

export default LocationResolver;