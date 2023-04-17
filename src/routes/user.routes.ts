import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createUserController,
  userProfileController,
} from "../controllers/user";
import { listUserCarsController } from "../controllers/car";
import { userCreateRequestSchema } from "../schemas/user";

const userRoutes = Router();

userRoutes.post(
  "",
  bodyValidator(userCreateRequestSchema),
  createUserController
);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController);
userRoutes.get("/cars", validateTokenMiddleware, listUserCarsController);

export default userRoutes;
