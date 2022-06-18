import LocationMarker from '../LocationMarker/LocationMarker'
import { IShop } from '../../models/shops'

interface IProps {
  shops: IShop[] | null
}

function LocationMarkers(props: IProps) {
  return (
    <>
      {props.shops &&
        props.shops.map((shop, index) => (
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
        ))}
    </>
  )
}

export default LocationMarkers
