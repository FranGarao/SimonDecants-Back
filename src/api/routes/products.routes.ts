import express from "express";
const router = express.Router();
import { productsController } from "../controllers/productsController";
const productsControllerInstance = new productsController();

/*Routes*/
//GET /api/products
router.get("/", productsControllerInstance.getProducts);

//POST /api/products/create/post
router.post("/create", productsControllerInstance.PostCreate);

export default router;
