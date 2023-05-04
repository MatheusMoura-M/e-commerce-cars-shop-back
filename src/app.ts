import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import carRoutes from "./routes/car.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/car", carRoutes);

app.use(handleError);

export default app;
