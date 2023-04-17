import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createUserController,
  userProfileController,
} from "../controllers/user";
import { listUserCarsController } from "../controllers/car";
import { userCreateSchema } from "../schemas/user";

const userRoutes = Router();

userRoutes.post("", bodyValidator(userCreateSchema), createUserController);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController);
userRoutes.get("/cars", validateTokenMiddleware, listUserCarsController);

export default userRoutes;
