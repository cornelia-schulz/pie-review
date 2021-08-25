import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarkers from './LocationMarkers';
// import HomeLocationMarker from './HomeLocationMarker'
// import SearchControl from './SearchControl'
// import { OpenStreetMapProvider } from 'react-leaflet-geosearch'

function Map() {
    // const provider = OpenStreetMapProvider()
    return (
      <MapContainer
        center={{ lat: -43.5258654860019,
        lng: 172.61722095547762 }}
        zoom={11} scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <LocationMarkers />
        {/* <HomeLocationMarker />
        <SearchControl
          provider={provider}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter a place name"}
          keepResult={true}
        /> */}
      </MapContainer>
    )
 }

 export default Map