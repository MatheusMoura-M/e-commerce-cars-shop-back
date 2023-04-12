import { Request, Response } from "express";
import { getEspecificCarService } from "../../services/car/getEspecificCar.service";

export const getEspecificCarController = async (
  req: Request,
  res: Response
) => {
  const carId: string = req.params.id;
  const car = await getEspecificCarService(carId);
  return res.status(200).json(car);
};
