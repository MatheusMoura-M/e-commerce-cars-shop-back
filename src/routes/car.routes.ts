import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createCarController } from "../controllers/car/createCar.controller";
import { getCarsController } from "../controllers/car/getCars.controller";
import { verifyGoodDealMiddleware } from "../middlewares/verifyGoodDeal.middleware";
import { bodyValidator } from "../middlewares";
import {
  carCreateSerializer,
  carUpdateSerializer,
} from "../schemas/car.schemas";
import { updateCarController } from "../controllers/car/updateCar.controller";
import { deleteCarController } from "../controllers/car/deleteCar.controller";

const carRoutes = Router();

carRoutes.post(
  "",
  validateTokenMiddleware,
  bodyValidator(carCreateSerializer),
  verifyGoodDealMiddleware,
  createCarController
);
carRoutes.get("", validateTokenMiddleware, getCarsController);
carRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(carUpdateSerializer),
  verifyGoodDealMiddleware,
  updateCarController
);
carRoutes.delete("/:id", validateTokenMiddleware, deleteCarController);

export default carRoutes;
