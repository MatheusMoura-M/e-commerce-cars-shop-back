import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";

import { AppError } from "../../error/appError.error";
import { ICar } from "../../interfaces/car.interfaces";

export const getEspecificCarService = async (carId: string): Promise<ICar> => {
  const carRepository = AppDataSource.getRepository(Car);

  const car = await carRepository.findOne({
    where: {
      id: carId,
    },
    relations: {
      user: true,
    },
  });

  if (!car) {
    throw new AppError("Car not found!", 404);
  }

  return car;
};
