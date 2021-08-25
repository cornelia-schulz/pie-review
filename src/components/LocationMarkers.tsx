import { useState } from 'react';
import LocationMarker from './LocationMarker';

function LocationMarkers() {
const [shops, setShops] = useState([
  {
    id: 123,
    name: 'Pies and Coffee',
    city: 'Christchurch',
    street: '290 Selwyn St',
    county: 'Canterbury',
    country: 'New Zealand',
    latitude: -43.549126911758606,
    longitude: 172.62206744255727,
    pies: []
  },
  {
    id: 124,
    name: 'The great pastry shop',
    city: 'Christchurch',
    street: 'Riverside Market',
    county: 'Canterbury',
    country: 'New Zealand',
    latitude: -43.533927237712405,
    longitude: 172.63397647139195,
    pies: []
  },
  {
    id: 125,
    name: 'Copenhagen Bakery',
    city: 'Christchurch',
    street: '409 Harewood Rd',
    county: 'Canterbury',
    country: 'New Zealand',
    latitude: -43.484311485809485,
    longitude: 172.57846588303863,
    pies: []
  }
]);

  return (
    <>
      {shops.map((shop, index) =>
        <LocationMarker
          id={shop.id}
          name={shop.name}
          street={shop.street}
          key={index}
          city={shop.city}
          county={shop.county}
          country={shop.country}
          longitude={shop.longitude}
          latitude={shop.latitude}
        />
      )}
    </>
  )
}

export default LocationMarkers