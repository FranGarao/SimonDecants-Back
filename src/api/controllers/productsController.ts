import { Request, Response } from "express";
import { ProductService } from "../services/ProductsService";

const productServiceInstance = new ProductService();

export class productsController {
  getProducts = async (_req: Request, res: Response) => {
    productServiceInstance
      .getProducts()
      .then((products) => {
        res.json(products);
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  PostCreate = async (_req: Request, res: Response) => {
    productServiceInstance
      .createOne(_req.body)
      .then((newProduct) => {
        res.json(newProduct);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  }
}
