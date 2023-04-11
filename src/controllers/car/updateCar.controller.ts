import { Request, Response } from "express";

export const updateCarController = async (req: Request, res: Response) => {
  const carUpdateData = req.body;
  const userId: string = req.id;
  const carUpdated = updateCarService(carUpdateData, userId);
  return res.status(200).json(carUpdated);
};
