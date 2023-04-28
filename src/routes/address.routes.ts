import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import { updateAddressController } from "../controllers/address";
import { addressUpdateRequestSchema } from "../schemas/address";

const addressRoutes = Router();

addressRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(addressUpdateRequestSchema),
  updateAddressController
);

export default addressRoutes;
