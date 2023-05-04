import { Router } from "express";

import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import { commentRequestSchema } from "../schemas/comments";
import {
  createCommentController,
  listCommentController,
} from "../controllers/comments";

const commentsRoutes = Router();

commentsRoutes.post(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(commentRequestSchema),
  createCommentController
);

commentsRoutes.get("/:id", listCommentController);

export default commentsRoutes;
