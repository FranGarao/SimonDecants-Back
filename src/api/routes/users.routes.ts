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

//GET api/users/login
router.get("/login", usersControllerInstance.setCookies);

//GET api/users/locations
router.get("/locations", usersControllerInstance.getLocations);

//GET api/users/logout
router.get("/logout", usersControllerInstance.logOut);

export default router;
