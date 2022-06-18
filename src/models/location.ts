export interface ILocation {
  label: string,
  lat: number,
  lng: number
}

export interface IPosition {
  lat: number,
  lng: number
}

export interface IBounds {
  _northEast: IPosition,
  _southWest: IPosition
}

