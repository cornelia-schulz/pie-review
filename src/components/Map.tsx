import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarkers from './LocationMarkers';
import SearchControl from './SearchControl';
import { IShop } from '../models/shops';

interface IProps {
  shops: IShop[]
}

function Map(props: IProps) {
  return (
    <MapContainer
      center={{ lat: -43.5258654860019,
      lng: 172.61722095547762 }}
      zoom={11} scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarkers shops={props.shops} />
      <SearchControl
        showMarker={true}
        showPopup={false}
        popupFormat='label'
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={false}
        searchLabel={"Enter a place name"}
        keepResult={true}
      /> 
    </MapContainer>
  )
 }

 export default Map