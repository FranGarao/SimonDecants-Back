import express from "express";
const router = express.Router();
import { productsController } from "../controllers/productsController";
const productsControllerInstance = new productsController();

/*Routes*/
//GET /api/products
router.get("/", productsControllerInstance.getProducts);

//TODO: probablemente haya que cambiar esta ruta en un futuro
//GET /api/products/:id
router.get("/:id/product", productsControllerInstance.getProductById);

//POST /api/products/create/post
router.post("/create", productsControllerInstance.postCreate);

router.get("/test", productsControllerInstance.getProducts);

export default router;
