import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);

export default userRoutes;
