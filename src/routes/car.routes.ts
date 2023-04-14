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
import { createImageCarController } from "../controllers/car/carImage/createCar.controller";
import { listCarImageController } from "../controllers/car/carImage/listCarImage.controller";
import { deleteCarImageController } from "../controllers/car/carImage/deleteCarImage.controller";
import { isAvalidUUID } from "../middlewares/isAvalidUUID.middleware";
import { listBrandsController } from "../controllers/Brand/listBrand.controller";

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
carRoutes.delete("/:id", isAvalidUUID, validateTokenMiddleware, deleteCarController);


carRoutes.post("/image/:id", isAvalidUUID, validateTokenMiddleware, createImageCarController)

carRoutes.get("/image/:id", isAvalidUUID, listCarImageController)

carRoutes.delete("/image/:id", isAvalidUUID, validateTokenMiddleware, deleteCarImageController)


carRoutes.get("/brands", listBrandsController)

export default carRoutes;
