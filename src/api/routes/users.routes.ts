import express from "express";
const router = express.Router();
import { getUsers } from "../controllers/usersController";

//router.get("/", (_req, res) => {
//   res.send("Hello World!");
// });
router.get("/", getUsers);

export default router;
