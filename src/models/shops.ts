export interface IShop {
  id: number,
  name: string,
  street: string,
  city: string,
  county: string,
  country: string,
  longitude: number,
  latitude: number
}

export interface IShops extends Array<IShop>{}