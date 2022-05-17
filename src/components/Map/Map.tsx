import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarkers from '../LocationMarkers/LocationMarkers';
import SearchControl from '../SearchControl/SearchControl';
import LocationResolver from '../LocationResolver/LocationResolver';
import { IShop } from '../../models/shops';

interface IProps {
  shops: IShop[],
  isMobile: Boolean
}

function Map(props: IProps) {

  return (
    <MapContainer
      center={{lat: -43.5258654860019, lng: 172.61722095547762}}
      className={props.isMobile ? 'mobile' : 'desktop'}
      zoom={12} scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationResolver />
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

 export default Map;