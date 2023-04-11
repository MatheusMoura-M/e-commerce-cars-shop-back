import { Request, Response } from "express";
import { updateCarService } from "../../services/car/updateCar.service";

export const updateCarController = async (req: Request, res: Response) => {
  const carUpdateData = req.body;
  const userId: string = req.id;
  const carId: string = req.params.id;
  const carUpdated = await updateCarService(carUpdateData, userId, carId);
  return res.status(200).json(carUpdated);
};
