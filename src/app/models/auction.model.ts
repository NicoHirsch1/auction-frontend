import { Product } from "./product.model";
import { Seller } from "./seller.model";

export interface Auction {
  id: number;
  endTs: string;
  product: Product;
  seller: Seller;
  startPrice: number;
  startTs: string;
}
