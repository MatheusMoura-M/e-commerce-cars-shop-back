import { AppError } from "../../error/appError.error";
import { especifcCarResponseSchema } from "../../schemas/car.schemas";
import { ICarResponse } from "../../interfaces/car.interfaces";
import { carRepo } from "../../utils/repositories";

export const getEspecificCarService = async (
  carId: string
): Promise<ICarResponse> => {
  const car = await carRepo.findOne({
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
