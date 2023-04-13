import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createCarController } from "../controllers/car/createCar.controller";
import { getCarsController } from "../controllers/car/getCars.controller";
import { verifyGoodDealMiddleware } from "../middlewares/verifyGoodDeal.middleware";

const carRoutes = Router();

carRoutes.post(
  "",
  validateTokenMiddleware,
  verifyGoodDealMiddleware,
  createCarController
);
carRoutes.get("", validateTokenMiddleware, getCarsController);

export default carRoutes;
