import { RegisterUser, LoginUser } from "../controller/user_controller.js";
import express from "express";

const router = express.Router();

router.post('/signup', RegisterUser);
router.post('/login', LoginUser)

export default router;