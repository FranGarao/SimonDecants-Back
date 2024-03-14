import express from "express";
const router = express.Router();
import { usersController } from "../controllers/usersController";

const userController = new usersController();
/*Routes*/
//GET api/users/
router.get("/", userController.getUsers);

//POST api/users/create
router.post("/create", userController.createOne);

export default router;
