import { Request, Response } from "express";
import { productService } from "../services/productsService";

export class productsController {
  getProducts = async (_req: Request, res: Response) => {
    productService
      .getAllProducts()
      .then((products) => {
        res.json(products);
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  getProductById = async (_req: Request, res: Response) => {
    //TODO: setear id de producto
    productService
      .getProduct(1)
      .then((products) => {
        res.json(products);
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  postCreate = async (_req: Request, res: Response) => {
    productService
      .createOne(_req.body)
      .then((newProduct) => {
        res.json(newProduct);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
}
