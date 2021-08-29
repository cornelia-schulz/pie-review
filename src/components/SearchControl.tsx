import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import { OpenStreetMapProvider } from 'react-leaflet-geosearch';
import { ISearch } from '../models/search';

const SearchControl = (search: ISearch) => {
  const provider = OpenStreetMapProvider();
  const map = useMap();
  
  useEffect(() => {
    // @ts-ignore see https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet
    const searchControl = new GeoSearchControl({
      provider: provider,
      ...search,
    })
  
      map.addControl(searchControl)
      return () => map.removeControl(searchControl)
    }, [provider, map, search])
  
    return null
}

export default SearchControl