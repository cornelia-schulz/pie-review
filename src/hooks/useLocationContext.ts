import { createContext, useContext } from 'react';
import { IPosition } from '../models/location';

export type LocationContent = {
  position: IPosition | null,
  setPosition:(c: IPosition | null) => void
}

export const LocationContext = createContext<LocationContent>({
  position: {lat: -43.5258654860019, lon: 172.61722095547762},
  setPosition: (c: IPosition | null) => {}
});

export const useLocationContext = () => useContext(LocationContext);