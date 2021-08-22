import { useState } from 'react';
import LocationMarker from './LocationMarker';

function LocationMarkers() {
//   const { loading, error, data } = useQuery(GETLOCATIONS)
const [locations, getLocations] = useState({})  
// if (loading) return <p>Loading...</p>
//   if (error) return <p>Error :( </p>

  return (
      data.locations.map((location, index) =>
        <LocationMarker
          id={location.id}
          info={location.info} 
          info_title={location.info_title}
          key={index}
          label={location.label}
          lat={location.lat}
          lng={location.lng}
          title={location.title}
          type={location.type}
        />
      )
  )
}

export default LocationMarkers