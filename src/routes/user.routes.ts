import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { bodyValidator } from "../middlewares";
import { userCreateSchema } from "../schemas/user.schemas";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { userProfileController } from "../controllers/user/getUserProfile.controller";

const userRoutes = Router();

userRoutes.post("", bodyValidator(userCreateSchema), createUserController);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController)

export default userRoutes;
