import { AppError } from "../../error/appError.error";
import { IUserRequest, IUserResponse } from "../../interfaces/user";
import { userCreateAndUpdateResponseSchema } from "../../schemas/user";
import { addressRepo, userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const user = await userRepo.findOne({
    where: {
      email: userData.email,
    },
  });

  if (user) {
    throw new AppError("E-mail already registered", 409);
  }

  const isCpf = userRepo.findOneBy({ cpf: userData.cpf });

  if (!isCpf) {
    throw new AppError("CPF already registered", 409);
  }

  const {
    password,
    name,
    isSeller,
    image_url,
    email,
    description,
    cpf,
    birthdate,
    telephone,
    state,
    city,
    street,
    number,
    zipcode,
    complement,
  } = userData;

  const newUser = userRepo.create({
    name,
    password,
    isSeller,
    image_url,
    email,
    description,
    cpf,
    birthdate,
    telephone,
  });

  const newAddress = addressRepo.create({
    state,
    city,
    street,
    number,
    zipcode,
    complement,
    user: newUser,
  });

  await userRepo.save(newUser);
  await addressRepo.save(newAddress);

  const clientWithoutPassword =
    await userCreateAndUpdateResponseSchema.validate(
      {
        id: newUser.id,
        ...userData,
      },
      {
        stripUnknown: true,
      }
    );

  return clientWithoutPassword;
};
