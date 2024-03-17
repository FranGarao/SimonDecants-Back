import express from "express";
const router = express.Router();
import { usersController } from "../controllers/usersController";

const usersControllerInstance = new usersController();
/*Routes*/
//GET api/users/
router.get("/", usersControllerInstance.getUsers);

//POST api/users/create
router.post("/create", usersControllerInstance.createOne);

//POST api/users/login
router.post("/login", usersControllerInstance.login);

export default router;
