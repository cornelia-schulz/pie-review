import { useEffect, useState } from 'react';
import './home.scss';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import ShopCard from '../../components/ShopCard/ShopCard';
import { LocationContext } from '../../hooks/useLocationContext';
import { IBounds, IPosition } from '../../models/location';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Home () {
  const [position, setPosition] = useState<IPosition | null>(null);
  const [locationName, setLocationName] = useState('');
  const [bounds, setBounds] = useState<IBounds | null>(null);
  const {windowWidth} = useWindowDimensions();
  const [showMap, setShowMap] = useState('list');
  const [buttonText, setButtonText] = useState('Show Map');
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
  }, [locationName, position, windowWidth]);

  const toggleMap = () => {
    console.log("toggle map", showMap);
    if (showMap === 'list') {
      setShowMap('map');
      setButtonText('Show List');
      console.log({showMap});
    }
    else {
      setShowMap('list');
      setButtonText('Show Map');
      console.log({showMap});
    }
  }

  return (
    <LocationContext.Provider value= {{ 
      position, setPosition,
      locationName, setLocationName,
      bounds, setBounds
    }}>
      <Header />
      <main className="home">
        <article className="shops desktop">
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
        <Map isMobile={false} shops={shops} />

        {showMap === 'list' && <article className="shops mobile">
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
        </article>}
        {showMap === 'map' && <Map isMobile={true} shops={shops} />}
        <button
          className="button-slim toggle-map-button mobile"
          onClick={toggleMap}>{buttonText}
        </button>
      </main>
    </LocationContext.Provider>
  )
}

export default Home