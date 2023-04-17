import { AppError } from "../../error/appError.error";
import { IUserResponse } from "../../interfaces/user";
import { userCreateReturnSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const userProfileService = async (
  id_user: string
): Promise<IUserResponse> => {
  const getUser = await userRepo.findOneBy({ id: id_user });

  const clientWithoutPassword = await userCreateReturnSchema.validate(getUser, {
    stripUnknown: true,
  });

  return clientWithoutPassword;
};
