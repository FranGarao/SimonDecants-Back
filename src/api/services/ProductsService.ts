import { initializeProduct } from "../db/models/Product";
import { sequelizeInstance } from "../db/dbInstance";
import { Product } from "../interfaces/Product";
const Product = initializeProduct(sequelizeInstance);

export class ProductService {
  createOne = async (newProduct: Partial<Product>) => {
    const product = await Product.create(newProduct);
    return product;
  };
  deleteOne = async (id: number) => {
    const product = await Product.destroy({ where: { id } });
    return product;
  };
  getProduct = async (id: number) => {
    const product = await Product.findOne({ where: { id }, raw: true });
    return product;
  };
  getProductsByCategory = async (category: string) => {
    const products = await Product.findAll({ where: { category }, raw: true });
    return products;
  };
}
