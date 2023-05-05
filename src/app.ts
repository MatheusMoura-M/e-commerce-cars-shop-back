import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
import cors from "cors";
import {
  addressRoutes,
  carRoutes,
  sessionRoutes,
  userRoutes,
  commentsRoutes,
} from "./routes";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/car", carRoutes);
app.use("/address", addressRoutes);
app.use("/comments", commentsRoutes);

app.use(handleError);

export default app;
