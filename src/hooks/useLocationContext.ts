import { createContext, useContext } from 'react';
import { IPosition, IBounds } from '../models/location';

export type LocationContent = {
  locationName: string,
  setLocationName: (l: string) => void,
  position: IPosition | null,
  setPosition:(p: IPosition | null) => void
  bounds: IBounds | null,
  setBounds: (b: IBounds | null) => void
}

export const LocationContext = createContext<LocationContent>({
  locationName: 'Christchurch',
  setLocationName: (l: string) => {},
  position: {lat: -43.5258654860019, lng: 172.61722095547762},
  setPosition: (p: IPosition | null) => {},
  bounds: {
    _northEast: {
      lat: -43.4551619366977,
      lng: 172.68791198730472
    },
    _southWest: {
      lat: -43.60649929007941,
      lng: 172.58525848388675
    }
  },
  setBounds: (b: IBounds | null) => {}
});

export const useLocationContext = () => useContext(LocationContext);