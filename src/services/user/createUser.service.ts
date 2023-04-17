import { IUserRequest } from "../../interfaces/user.interfaces";
import { userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserRequest> => {
  const newUser = userRepo.create(userData);

  await userRepo.save(newUser);

  return newUser;
};
