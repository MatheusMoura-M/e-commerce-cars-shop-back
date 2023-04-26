import { Request, Response } from "express";
import { sendResetEmailPasswordService } from "../../services/user";

export const resetPasswordUserController = async (
  req: Request,
  res: Response
) => {
  return res.json({ message: "Password has change with sucess." });
};
