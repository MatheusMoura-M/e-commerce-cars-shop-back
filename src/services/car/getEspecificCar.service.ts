import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";

import { AppError } from "../../error/appError.error";
import { especifcCarResponseSchema } from "../../schemas/car.schemas";
import { ICarResponse } from "../../interfaces/car.interfaces";

export const getEspecificCarService = async (
  carId: string
): Promise<ICarResponse> => {
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

  const carValidated = await especifcCarResponseSchema.validate(car, {
    stripUnknown: true,
  });

  return carValidated;
};
