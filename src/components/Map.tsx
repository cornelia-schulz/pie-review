import { MapContainer, TileLayer } from 'react-leaflet'
// import LocationMarkers from './LocationMarkers'
// import HomeLocationMarker from './HomeLocationMarker'
// import SearchControl from './SearchControl'
import { OpenStreetMapProvider } from 'react-leaflet-geosearch'

function Map() {
    const provider = OpenStreetMapProvider()
    return (
      <MapContainer
        center={{ lat: -41.27056663303353,
        lng: 174.65973605607988 }}
        zoom={11} scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LocationMarkers />
        <HomeLocationMarker />
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