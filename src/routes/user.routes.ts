import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { bodyValidator } from "../middlewares";
import { userCreateSchema } from "../schemas/user.schemas";

const userRoutes = Router();

userRoutes.post("", bodyValidator(userCreateSchema), createUserController);

export default userRoutes;
