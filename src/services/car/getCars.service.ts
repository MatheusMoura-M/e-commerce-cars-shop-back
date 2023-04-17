import { ICarResponse } from "../../interfaces/car";
import { allCarsResponseSchema } from "../../schemas/car";
import { carRepo } from "../../utils/repositories";

export const getCarsService = async (): Promise<ICarResponse[]> => {
  const cars = await carRepo.find({
    relations: {
      user: true,
    },
  });

  const carsValidated = await allCarsResponseSchema.validate(cars, {
    stripUnknown: true,
  });

  return carsValidated;
};
