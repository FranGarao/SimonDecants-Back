import { Size } from "./Size";

export interface TransactionDetails {
  transaction_id: string;
  product_id: string;
  product_quantity: number;
  product_total: number;
  unit_price: number;
  tax: number;
  discount: number;
  size: Size;
}
