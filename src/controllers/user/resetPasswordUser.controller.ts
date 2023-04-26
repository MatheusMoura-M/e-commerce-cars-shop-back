import { Request, Response } from "express";

export const resetPasswordUserController = async (
  req: Request,
  res: Response
) => {
  return res.json({ message: "token send" });
};
