import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createCarController } from "../controllers/car/createCar.controller";
import { getCarsController } from "../controllers/car/getCars.controller";
import { bodyValidator } from "../middlewares";
import { carUpdateSerializer } from "../schemas/car.schemas";
import { updateCarController } from "../controllers/car/updateCar.controller";

const carRoutes = Router();

carRoutes.post("", validateTokenMiddleware, createCarController);
carRoutes.get("", validateTokenMiddleware, getCarsController);
carRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(carUpdateSerializer),
  updateCarController
);

export default carRoutes;
