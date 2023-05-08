import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import { updateAddressController } from "../controllers/address";
import { addressUpdateRequestSchema } from "../schemas/address";
import { getUserAddressLoggedController } from "../controllers/address/getUserAddressLogged.controller"; 
import { addressResponseSchema } from "../schemas/address/addressUpdateRequest.schema";

const addressRoutes = Router();

addressRoutes.get(
  "/profile",
  validateTokenMiddleware,
  getUserAddressLoggedController
);

addressRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(addressUpdateRequestSchema),
  updateAddressController
);

export default addressRoutes;
