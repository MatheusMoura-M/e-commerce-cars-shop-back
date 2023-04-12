import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error/appError.error";

export const deleteCarService = async (
  userId: string,
  carId: string
): Promise<{}> => {
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
    throw new AppError("You don't have permission to see this car", 403);
  }

  await carRepository.delete(car.id);

  return {};
};
