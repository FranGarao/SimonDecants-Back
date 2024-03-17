import express from "express";
const router = express.Router();
import { productsController } from "../controllers/productsController";
const productsControllerInstance = new productsController();

/*Routes*/
//GET /api/products
router.get("/", productsControllerInstance.getProducts);

export default router;
