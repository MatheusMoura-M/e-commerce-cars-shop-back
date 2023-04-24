import { AppError } from "../../error/appError.error";
import { IUserUpdateRequest, IUserResponse } from "../../interfaces/user";
import { userCreateAndUpdateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const updateUserService = async (
  id: string,
  payload: IUserUpdateRequest
): Promise<IUserResponse> => {
  const userFound = await userRepo.findOneBy({
    id: id,
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const userUpdated = {
    ...userFound,
    ...payload,
  };

  await userRepo.save(userUpdated);

  const userWithout = await userCreateAndUpdateResponseSchema.validate(
    userUpdated,
    {
      stripUnknown: true,
    }
  );

  return userWithout;
};
