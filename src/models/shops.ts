export interface IShop {
  id: number,
  name: string,
  location: IShopLocation
}

export interface IShops extends Array<IShop>{}

export interface IShopLocation {
  street: string,
  city: string,
  county: string,
  country: string,
  longitude: number,
  latitude: number
}