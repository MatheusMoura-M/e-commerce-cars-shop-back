import { IUserResponse } from "../../interfaces/user.interfaces";
import { userRepo } from "../../utils/repositories";

export const userProfileService = async (
  id_user: string
): Promise<IUserResponse> => {
  const getUser = await userRepo.findOneBy({ id: id_user });

  return getUser;
};
