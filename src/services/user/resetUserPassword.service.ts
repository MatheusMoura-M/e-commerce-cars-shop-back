import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const deleteUserService = async (
  password: string,
  resetToken: string
) => {
  const userFound = await userRepo.findOne({
    where: {
      reset_token: resetToken,
    },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const userUpdated = {
    ...userFound,
    password: password,
    resetToken: null,
  };

  userRepo.save(userUpdated);
};
