import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

app.use(handleError);
app.use(cors());

export default app;
