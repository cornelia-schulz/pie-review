import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import ShopCard from '../components/ShopCard';
import { LocationContext } from '../hooks/useLocationContext';
import { IBounds, IPosition } from '../models/location';

function Home () {
  const [position, setPosition] = useState<IPosition | null>(null);
  const [locationName, setLocationName] = useState('');
  const [bounds, setBounds] = useState<IBounds | null>(null);
  const [shops] = useState([
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

  useEffect(() => {
    if (locationName !== '') {
      let location = locationName.split(',');
      setLocationName(location[0]);
    }
    console.log("location: ", locationName);
    console.log("position", position);
  }, [locationName, position]);

  return (
    <LocationContext.Provider value= {{ 
      position, setPosition,
      locationName, setLocationName,
      bounds, setBounds
    }}>
      <Header />
      <main className="home">
        <article className="shops">
          {shops && shops.map((shop, index) => 
            <ShopCard 
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
        </article>
        <Map shops={shops} />
      </main>
    </LocationContext.Provider>
  )
}

export default Home