import { Product } from "../interfaces/Product";
import { models } from "../db/dbInstance";
class ProductService {
  //TODO: Crear interfaz para newProduct
  createOne = async (newProduct: Partial<Product>) => {
    const product = await models.Product.create(newProduct);
    return product;
  };
  deleteOne = async (id: number) => {
    const product = await models.Product.destroy({ where: { id } });
    return product;
  };
  getProduct = async (id: number) => {
    const product = await models.Product.findByPk(id);
    return product;
  };
  getAllProducts = async () => {
    const products = await models.Product.findAll({
      raw: true,
      include: [{ association: "size" }],
    });
    return products;
  };
  getProductsByCategory = async (category: string) => {
    const products = await models.Product.findAll({
      where: { category },
      raw: true,
    });
    return products;
  };
}

export const productService = new ProductService();
