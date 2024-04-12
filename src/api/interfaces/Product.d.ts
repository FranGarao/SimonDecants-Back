export interface Product {
  id?: number;
  title: string;
  description: string;
  stock: number;
  img: string;
  category_id: number;
  sm_price?: number;
  l_price?: number;
  xxl_price?: number;
  gender_id: number;
  brand: string;
  status_id: number;
  discount: number;
}
