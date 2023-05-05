import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
// import cors from "cors";
import {
  addressRoutes,
  carRoutes,
  sessionRoutes,
  userRoutes,
  commentsRoutes,
} from "./routes";

const app = express();
app.use(express.json());
<<<<<<< HEAD
app.use(cors());
=======

// app.use(cors());
>>>>>>> 84db32b4a30a570bcc4719acbc854400b2965d3d

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/car", carRoutes);
app.use("/address", addressRoutes);
app.use("/comments", commentsRoutes);

app.use(handleError);

export default app;
