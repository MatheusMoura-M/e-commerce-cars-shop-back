import { AppError } from "../../error/appError.error";
import { IUserResponse } from "../../interfaces/user";
import { userCreateAndUpdateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const userProfileService = async (
  id_user: string
): Promise<IUserResponse> => {
  const getUser = await userRepo.findOneBy({ id: id_user });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  const clientWithoutPassword =
    await userCreateAndUpdateResponseSchema.validate(getUser, {
      stripUnknown: true,
    });

  return clientWithoutPassword;
};
