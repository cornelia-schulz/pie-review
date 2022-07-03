import LocationMarker from '../LocationMarker/LocationMarker'
import { IShop } from '../../models/shops'

interface IProps {
  shops: IShop[] | null
  map: any
}

function LocationMarkers(props: IProps) {
  return (
    <>
      {props.shops &&
        props.shops.map((shop, index) => (
          <LocationMarker
            id={shop.id}
            map={props.map}
            name={shop.name}
            street={shop.location.street}
            key={index}
            city={shop.location.city}
            county={shop.location.county}
            country={shop.location.country}
            longitude={shop.location.longitude}
            latitude={shop.location.latitude}
            isActive={false}
          />
        ))}
    </>
  )
}

export default LocationMarkers
