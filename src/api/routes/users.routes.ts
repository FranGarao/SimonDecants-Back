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

//!posiblemente se borre, es de prueba GET api/users/locations
router.get("/locations", usersControllerInstance.getLocations);

export default router;
