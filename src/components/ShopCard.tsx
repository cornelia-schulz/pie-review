import { IShop } from '../models/shops';

function ShopCard(shop: IShop) {
  return (
    <div className="shop-card">
      <h3>{shop.name}</h3>
      <p>{shop.street}, {shop.city}</p>
    </div>
  );
}

export default ShopCard;