import { IUserRequest, IUserResponse } from "../../interfaces/user";
import { userCreateReturnSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const newUser = userRepo.create(userData);
  await userRepo.save(newUser);

  const clientWithoutPassword = await userCreateReturnSchema.validate(newUser, {
    stripUnknown: true,
  });

  return clientWithoutPassword;
};
