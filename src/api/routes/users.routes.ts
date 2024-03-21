import express from "express";
const router = express.Router();
import { usersController } from "../controllers/usersController";

const usersControllerInstance = new usersController();
/*Routes*/
//GET api/users/
router.get("/", usersControllerInstance.getUsers);

//POST api/users/create/post
router.post("/create/post", usersControllerInstance.createOne);

//POST api/users/login/post
router.post("/login/post", usersControllerInstance.login);

//GET api/users/login
router.get("/login", usersControllerInstance.setCookies);

//GET api/users/locations
router.get("/locations", usersControllerInstance.getLocations);

//GET api/users/logout
router.get("/logout", usersControllerInstance.logOut);

export default router;


// falta el get de /create
// agrege /post en linea 10/11 y 13/14