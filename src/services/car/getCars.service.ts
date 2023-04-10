import appDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";
import { ICar } from "../../interfaces/car.interfaces";

export const getCarsService = async (): Promise<ICar[]> => {
  const carRepo = appDataSource.getRepository(Car);
  const cars = await carRepo.find();

  return cars;
};
