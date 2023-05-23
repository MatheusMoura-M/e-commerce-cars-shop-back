import { AppError } from "../../error/appError.error";
import { addressRepo, carRepo, userRepo } from "../../utils/repositories";

export const deleteUserService = async (id: string) => {
  const userFound = await userRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      cars: true,
      address: true,
    },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  await userRepo.delete(id);

  return {};
};
