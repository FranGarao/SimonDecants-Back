import { Transactions } from "./Transactions";
export interface TransactionsDetails {
  transaction_id: string;
  product_id: string;
  product_quantity: number;
  product_total: number;
  unit_price: number;
  tax: number;
  discount: number;
}
