import { AppError } from "../../error/appError.error";
import { carRepo, userRepo } from "../../utils/repositories";

export const deleteUserService = async (id: string) => {
  const userFound = await userRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      cars: true,
    },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  // for await (let car of userFound.cars) {
  //   await carRepo.delete(car.id);
  // }

  await userRepo.delete(id);

  return {};
};
