import React, { useEffect, useState } from 'react'
import './home.scss'
import Header from '../../components/Header/Header'
import Map from '../../components/Map/Map'
import ShopCard from '../../components/ShopCard/ShopCard'
import { useLocationContext } from '../../hooks/useLocationContext'
import { IShop } from '../../models/shops'

function Home() {
  const locationContext = useLocationContext()
  const [showMap, setShowMap] = useState('list')
  const [buttonText, setButtonText] = useState('Show Map')
  const [filteredShops, setFilteredShops] = useState<IShop[] | null>([])
  const [isLoaded, setIsLoaded] = useState(false)
  // const [users, setUsers] = useState([]);
  const [error, setError] = useState(null)
  const [shops, setShops] = useState<IShop[]>([
    // {
    //   id: 123,
    //   name: 'Pies and Coffee',
    //   city: 'Christchurch',
    //   street: '290 Selwyn St',
    //   county: 'Canterbury',
    //   country: 'New Zealand',
    //   latitude: -43.529126911758606,
    //   longitude: 172.62206744255727,
    //   pies: []
    // },
    // {
    //   id: 124,
    //   name: 'The great pastry shop',
    //   city: 'Christchurch',
    //   street: 'Riverside Market',
    //   county: 'Canterbury',
    //   country: 'New Zealand',
    //   latitude: -43.533927237712405,
    //   longitude: 172.63397647139195,
    //   pies: []
    // },
    // {
    //   id: 125,
    //   name: 'Copenhagen Bakery',
    //   city: 'Christchurch',
    //   street: '409 Harewood Rd',
    //   county: 'Canterbury',
    //   country: 'New Zealand',
    //   latitude: -43.484311485809485,
    //   longitude: 172.57846588303863,
    //   pies: []
    // },
    // {
    //   id: 126,
    //   name: 'The Pie Tin Newtown',
    //   city: 'Sydney',
    //   street: '1a Brown St',
    //   county: 'NSW',
    //   country: 'Australia',
    //   latitude: -33.89518531945312,
    //   longitude: 151.18240158394033,
    //   pies: []
    // },
    // {
    //   id: 127,
    //   name: 'The House of Pie',
    //   city: 'Sydney',
    //   street: '540 Bunnerong Road',
    //   county: 'NSW',
    //   country: 'Australia',
    //   latitude: -33.959505303896556,
    //   longitude: 151.23099792627124,
    //   pies: []
    // }
  ])

  const toggleMap = () => {
    // console.log('toggle map', showMap)
    if (showMap === 'list') {
      setShowMap('map')
      setButtonText('Show List')
    } else {
      setShowMap('list')
      setButtonText('Show Map')
    }
  }

  const filterShops = () => {
    const result = shops.filter(
      (shop) =>
        shop.latitude >= locationContext.bounds!._southWest.lat &&
        shop.latitude <= locationContext.bounds!._northEast.lat &&
        shop.longitude >= locationContext.bounds!._southWest.lng &&
        shop.longitude <= locationContext.bounds!._northEast.lng,
    )
    setFilteredShops(shops)
    // console.log('home filteredshops:', filteredShops)
  }

  useEffect(() => {
    if (locationContext.bounds !== null) {

      //       _northEast: {lat: -43.44818330704061, lng: 172.78987884521487}
      // _southWest: {lat: -43.613459626278306, lng: 172.4832916259766}
      let ne = locationContext.bounds._northEast
      let sw = locationContext.bounds._southWest
      fetch(
        `https://localhost:5001/api/v1/shops?ne_lat=${ne.lat}&ne_lng=${ne.lng}&sw_lat=${sw.lat}&sw_lng=${sw.lng}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((res) => res.json())
        .then(
          (data) => {
            setIsLoaded(true)
            setShops(data)
            setFilteredShops(data)
            console.log('filtered shops', data)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          },
        )
    } else {
      console.log('no bounds')
    }

    // console.log('Home Users: ', shops, isLoaded)
  }, [locationContext, locationContext.bounds, locationContext.position])

  return (
    <React.Fragment>
      <Header />
      <main className="home">
        <article className="shops desktop">
          {filteredShops &&
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

        <Map isMobile={false} shops={filteredShops} />

        {showMap === 'list' && (
          <article className="shops mobile">
            {filteredShops &&
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
