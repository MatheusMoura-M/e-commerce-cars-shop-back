import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error/appError.error";
import {
  ICarUpdate,
  ICarUpdateResponse,
} from "../../interfaces/car.interfaces";
import { carResponseSerializer } from "../../schemas/car.schemas";

export const updateCarService = async (
  carUpdateData: ICarUpdate,
  userId: string,
  carId: string
): Promise<ICarUpdateResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const carRepository = AppDataSource.getRepository(Car);

  const user = await userRepository.findOneBy({
    id: userId,
  });

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

  if (car.user.id !== user!.id) {
    throw new AppError("You don't have permission to update this car", 403);
  }

  const updatedCar = carRepository.create({
    ...car,
    ...carUpdateData,
  });

  await carRepository.save(updatedCar);

  const returnCar = await carResponseSerializer.validate(updatedCar, {
    stripUnknown: true,
  });

  return returnCar;
};
