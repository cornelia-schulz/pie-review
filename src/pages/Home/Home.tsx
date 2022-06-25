import React, { useEffect, useState } from 'react'
import './home.scss'
import Header from '../../components/Header/Header'
import Map from '../../components/Map/Map'
import ShopCard from '../../components/ShopCard/ShopCard'
import { useLocationContext } from '../../hooks/useLocationContext'
import { IShop } from '../../models/shops'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

function Home() {
  const locationContext = useLocationContext()
  const [showMap, setShowMap] = useState('list')
  const [buttonText, setButtonText] = useState('Show Map')
  const [filteredShops, setFilteredShops] = useState<IShop[] | null>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [shopAvailability, setShopAvailability] = useState('')
  const [shops] = useState<IShop[]>([
    {
      id: 123,
      name: 'Pies and Coffee',
      city: 'Christchurch',
      street: '290 Selwyn St',
      county: 'Canterbury',
      country: 'New Zealand',
      latitude: -43.529126911758606,
      longitude: 172.62206744255727,
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
    },
  ])

  const toggleMap = () => {
    if (showMap === 'list') {
      setShowMap('map')
      setButtonText('Show List')
    } else {
      setShowMap('list')
      setButtonText('Show Map')
    }
  }

  useEffect(() => {
    if (locationContext.bounds !== null) {
      let ne = locationContext.bounds._northEast
      let sw = locationContext.bounds._southWest
      setIsLoading(true)
      console.log('1: ', isLoading)
      fetch(
        `https://localhost:5001/api/v1/shops?ne_lat=${ne.lat}&ne_lng=${ne.lng}&sw_lat=${sw.lat}&sw_lng=${sw.lng}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Database not available')
        })
        .then(
          (data) => {
            setIsLoading(false)
            console.log(isLoading)
            setFilteredShops(data)
            if (!filteredShops || filteredShops.length === 0) {
              setShopAvailability('Sorry, there are no pies here yet')
            }
          },
          (error) => {
            setIsLoading(false)
            setError(error)
            console.error(error)
            console.log(locationContext)
            if (locationContext.locationName === 'Christchurch') {
              setFilteredShops(shops)
            } else {
              setFilteredShops([])
            }
          },
        )
    } else {
      console.log('no bounds')
    }
  }, [locationContext, locationContext.bounds, locationContext.position])

  if (filteredShops && filteredShops.length === 0 && isLoading === false) {
    return (
      <React.Fragment>
      <Header />
      <main className="home">
        <article className="shops desktop">
          No shops here yet
        </article>
        
        <Map isMobile={false} shops={filteredShops} />

        {showMap === 'list' && (
          <article className="shops mobile">
            No shops here yet
          </article>
        )}
        {showMap === 'map' && <Map isMobile={true} shops={filteredShops} />}
        <button
          className="button-slim toggle-map-button mobile"
          onClick={toggleMap}
        >
          {buttonText}
        </button>
      </main>
    </React.Fragment>
    )
  } 
  return (
    <React.Fragment>
      <Header />
      <main className="home">
        <article className="shops desktop">
          {isLoading ? <LoadingSpinner /> : 
          filteredShops &&
            filteredShops.map((shop, index) => 
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
        
        <Map isMobile={false} shops={filteredShops} />

        {showMap === 'list' && (
          <article className="shops mobile">
            {filteredShops &&
              filteredShops.length > 0 &&
              filteredShops.map((shop, index) => (
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
              ))}
          </article>
        )}
        {showMap === 'map' && <Map isMobile={true} shops={filteredShops} />}
        <button
          className="button-slim toggle-map-button mobile"
          onClick={toggleMap}
        >
          {buttonText}
        </button>
      </main>
    </React.Fragment>
  )
}

export default Home
