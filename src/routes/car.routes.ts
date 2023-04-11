import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createCarController } from "../controllers/car/createCar.controller";
import { getCarsController } from "../controllers/car/getCars.controller";

const carRoutes = Router();

carRoutes.post("", validateTokenMiddleware, createCarController);
carRoutes.get("", validateTokenMiddleware, getCarsController);
carRoutes.patch("", validateTokenMiddleware);

export default carRoutes;
