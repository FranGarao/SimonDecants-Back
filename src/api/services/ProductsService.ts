import { initializeProduct } from "../db/models/Product";
import { sequelizeInstance } from "../db/dbInstance";
const Product = initializeProduct(sequelizeInstance);

export class ProductService {
  getProducts = async () => {
    const products = await Product.findAll({ raw: true });
    return products;
  };
  createOne = async (newProduct: any) => {
    const product = await Product.create(newProduct);
    return product;
  };
  updateOne = async (id: number, newProduct: any) => {
    const product = await Product.update(newProduct, { where: { id } });
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
