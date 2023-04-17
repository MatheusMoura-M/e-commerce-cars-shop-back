import { ICarResponse } from "../../interfaces/car.interfaces";
import { carRepo } from "../../utils/repositories";

export const getCarsService = async (): Promise<ICarResponse[]> => {
  const cars = await carRepo.find();

  return cars;
};
