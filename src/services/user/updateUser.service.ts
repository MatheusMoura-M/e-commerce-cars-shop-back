import { AppError } from "../../error/appError.error";
import { IUserUpdateRequest, iUserUpdateResponse } from "../../interfaces/user";
import { userUpdateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const updateUserService = async (
  id: string,
  payload: IUserUpdateRequest
): Promise<iUserUpdateResponse> => {
  if (payload.birthdate === "") {
    delete payload.birthdate;
  }
  if (payload.name === "") {
    delete payload.name;
  }
  if (payload.description === "") {
    delete payload.description;
  }
  if (payload.cpf === "") {
    delete payload.cpf;
  }
  if (payload.email === "") {
    delete payload.email;
  }
  if (payload.image_url === "") {
    delete payload.image_url;
  }
  if (payload.password === "") {
    delete payload.password;
  }
  if (payload.telephone === "") {
    delete payload.telephone;
  }

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

  const userWithout = await userUpdateResponseSchema.validate(userUpdated, {
    stripUnknown: true,
  });

  return userWithout;
};
